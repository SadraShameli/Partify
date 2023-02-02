import argon2 from 'argon2';
import { Resolver, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { UniqueConstraintViolationException } from '@mikro-orm/core';

import { User } from '../entities/user';
import { COOKIE_NAME } from '../assets/constants';
import { MyContext } from '../utils/interfaces/context';
import { UserResponse } from '../contracts/types/userResponse';
import { UserRegistrationInput } from '../contracts/types/userRegistration';

@Resolver(User)
export class UserResolver {
    @Query(() => [User])
    async getAllUsers(@Ctx() { em }: MyContext): Promise<User[]> {
        return await em.find(User, {});
    }

    @Mutation(() => UserResponse)
    async registerUser(@Arg('options') options: UserRegistrationInput, @Ctx() { em }: MyContext) {
        const hashedPassword = await argon2.hash(options.password);
        const user = em.create(User, { username: options.username, password: hashedPassword, email: options.email });

        try {
            await em.persist(user).tryFlush(User, {});
        } catch (err) {
            if (err instanceof UniqueConstraintViolationException) {
                return {
                    errors: [
                        {
                            field: 'options',
                            message: 'username or email already taken',
                        },
                    ],
                };
            }
        }

        return user;
    }

    @Mutation(() => UserResponse)
    async login(@Arg('usernameOrEmail') usernameOrEmail: string, @Arg('password') password: string, @Ctx() { em, req }: MyContext): Promise<UserResponse> {
        const user = await em.findOne(User, usernameOrEmail.includes('@') ? { email: usernameOrEmail } : { username: usernameOrEmail });
        if (!user) {
            return {
                errors: [
                    {
                        field: 'usernameOrEmail',
                        message: "Username or Email doesn't exist",
                    },
                ],
            };
        }

        const valid = await argon2.verify(user.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: 'Incorrect password',
                    },
                ],
            };
        }

        req.session.userId = user.id;

        return {
            user,
        };
    }

    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContext) {
        return new Promise((resolve) =>
            req.session.destroy((err) => {
                res.clearCookie(COOKIE_NAME);
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            }),
        );
    }
}
