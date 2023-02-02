import 'ts-morph';
import cors from 'cors';
import { v4 } from 'uuid';
import { createClient } from 'redis';
import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';

import mikroConfig from './orm.config';
import { ProductResolver } from './resolvers/product';
import { UserResolver } from './resolvers/user';
import { MyContext } from './utils/interfaces/context';
import { COOKIE_NAME, _debug } from './assets/constants';

// import { Product, ProductAvailability } from './entities/Product';
// const tempProduct: Product = {
//     id: 0,
//     title: 'Classic Utility Jacket',
//     description:
//         'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//     imageLink: 'https://cdn.shopify.com/s/files/1/1479/8488/products/PERCIVAL_MENSWEAR_ECOM_UTILITY_KHAKI12.jpg',
//     availability: ProductAvailability.inStock,
//     price: { value: 110, currency: '$' },
//     brand: 'Percival',
//     productTypes: ['Men', 'Clothing', 'Jackets'],
//     highlights: ['Hand cut and sewn locally', 'Dyed with out proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
//     stockCount: 12,
//     starCount: 4,
//     reviewCount: 170,
// };

export default class Application {
    public orm: MikroORM<IDatabaseDriver<Connection>>;
    public host: express.Application;
    public server: Server;

    public redisStore: any;
    public redis: any;

    public init = async (): Promise<void> => {
        this.host = express();

        this.redisStore = connectRedis(session);
        this.redis = createClient({
            socket: {
                host: 'localhost',
                port: 80,
            },
        });

        this.redis.on('error', (err: any) => console.log('Redis Client Error', err));
        this.redis.connect();

        this.host.use(
            cors({
                origin: 'http://localhost:80',
                credentials: true,
            }),
            session({
                name: COOKIE_NAME,
                store: new this.redisStore({
                    client: this.redis,
                    disableTouch: true,
                }),
                cookie: {
                    maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: !_debug,
                    domain: _debug ? undefined : '',
                },
                saveUninitialized: false,
                secret: v4(),
                resave: false,
            }),
        );

        if (process.env.NODE_ENV !== 'production') {
            this.host.get('/graphql', expressPlayground({ endpoint: '/graphql' }));
        }

        this.host.use(cors());

        try {
            const schema: GraphQLSchema = await buildSchema({
                resolvers: [ProductResolver, UserResolver],
                dateScalarMode: 'isoDate',
                validate: false,
            });

            this.host.post(
                '/graphql',
                bodyParser.json(),
                graphqlHTTP((req, res) => ({
                    schema,
                    context: { req, res, em: this.orm.em.fork() } as MyContext,
                    customFormatErrorFn: (error) => {
                        throw error;
                    },
                })),
            );

            this.host.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction): void => {
                console.error('Something went wrong', error);
                res.status(400).send(error);
            });

            const port = process.env.PORT || 80;
            this.server = this.host.listen(port);
        } catch (error) {
            console.error('Could not start server', error);
        }
    };

    public connect = async (): Promise<void> => {
        try {
            this.orm = await MikroORM.init(mikroConfig);
            const migrator = this.orm.getMigrator();
            const migrations = await migrator.getPendingMigrations();
            if (migrations && migrations.length > 0) {
                await migrator.up();
            }
        } catch (error) {
            console.error('Could not connect to the database', error);
            throw Error(error);
        }
    };

    public generateSchema = async () => {
        const sg = this.orm.getSchemaGenerator();
        await sg.createSchema();
    };

    public generateEntities = async () => {
        const eg = this.orm.getEntityGenerator();
        await eg.generate();
    };
}
