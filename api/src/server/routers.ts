import { Router } from 'express';

import auth from './controllers/users/user';
import client from './controllers/client/client';
import storage from './controllers/storage/storage';
import setting from './controllers/setting/setting';

export default class Routes {

    public router: Router = Router();

    constructor() {
        this.start();
    }

    static init() {
        return new Routes();
    }

    start(): void {
        this.router.use('/auth', auth);
        this.router.use('/client', client);
        this.router.use('/storage', storage);
        this.router.use('/storage', storage);
        this.router.use('/setting', setting);
    }

}
