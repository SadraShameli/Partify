import { BaseEntity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ isAbstract: true })
export class Base<T extends { id: number }> extends BaseEntity<T, 'id'> {
    @Field()
    @PrimaryKey()
    public id: number;

    @Field()
    @Property()
    public createdAt?: Date = new Date();

    @Field()
    @Property({ onUpdate: () => new Date() })
    public updatedAt?: Date = new Date();

    constructor(body = {}) {
        super();
        this.assign(body);
    }
}
