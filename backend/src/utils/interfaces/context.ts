import { Request, Response } from 'express';
import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { CustomSessionData } from './sessionData';

export interface MyContext {
    em: EntityManager<IDatabaseDriver<Connection>>;
    req: Request & { session?: CustomSessionData };
    res: Response;
}
