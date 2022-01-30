import { Router } from 'express';
import { getStorage, postStorage } from './controller/storage.controller';



class Storage{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', getStorage);
        this.router.post('/', postStorage);
        // this.router.put('/', );
    }
}

const storage = new Storage();
export default storage.router;