import { MikroORM } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { _debug } from './assets/constants';

export default {
    migrations: {
        path: '../migrations',
        pathTs: '../migrations',
    },
    debug: _debug,
    type: 'postgresql',
    entities: ['./src/entities'],
    dbName: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    metadataProvider: TsMorphMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
