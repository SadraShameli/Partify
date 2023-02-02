import { Field, InputType } from 'type-graphql';

@InputType()
export class UserRegistrationInput {
    @Field()
    username: string;

    @Field()
    password: string;

    @Field()
    email: string;
}
