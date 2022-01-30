import express, { Application } from 'express';
import cors from 'cors';

import Routes from './routers';
import db from './db/connection';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '300';
        this.bdConnection();
        this.middlewares();
        this.routes();
    }

    async bdConnection() {
        try {
            await db.authenticate();
            console.log('Db ok');
            
        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        let routes = Routes.init();
        this.app.use('/api/', routes.router);
    }

    init(){
        this.app.listen(this.port);
    }
}

export default Server;