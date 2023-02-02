import 'dotenv/config';
import 'ts-morph';

import Application from './application';
(async () => {
    const application = new Application();
    await application.connect();
    await application.init();

    // await application.generateSchema();
    // await application.generateEntities();
})();
