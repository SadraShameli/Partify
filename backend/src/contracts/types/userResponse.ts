import { Field, ObjectType } from 'type-graphql';
import { User } from '../../entities/user';
import { FieldError } from './fieldError';

@ObjectType()
export class UserResponse extends FieldError {
    @Field(() => User, { nullable: true })
    user?: User;
}
