import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';

export const clearDatabase = async (orm: MikroORM<IDatabaseDriver<Connection>>): Promise<void> => {
    await orm.getSchemaGenerator().dropSchema({ dropDb: true, dropMigrationsTable: true, wrap: true });
    const migrator = orm.getMigrator();
    const migrations = await migrator.getPendingMigrations();

    if (migrations && migrations.length > 0) {
        await migrator.up();
    }

    await orm.getSchemaGenerator().updateSchema();
};
