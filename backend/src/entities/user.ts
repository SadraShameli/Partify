import { Property, Entity } from '@mikro-orm/core';
import { ObjectType, Field } from 'type-graphql';
import { Base } from '../utils/entities/base';

@ObjectType()
@Entity()
export class User extends Base<User> {
    @Field()
    @Property({ unique: true })
    username!: string;

    @Field()
    @Property({ unique: true })
    @Property()
    email!: string;

    @Property()
    password!: string;
}
