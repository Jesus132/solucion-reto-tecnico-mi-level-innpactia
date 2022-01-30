import { Router } from 'express';

import { getClient, postClient } from './controller/client.controller';

class Client {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', getClient);
        this.router.post('/', postClient);
        // this.router.put('/', );
    }
}

const client = new Client();
export default client.router;