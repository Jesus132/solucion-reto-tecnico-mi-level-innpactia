import { Router } from 'express';

import { getSetting, postSetting } from './controller/setting.controller';

class Setting {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', getSetting);
        this.router.post('/', postSetting);
        // this.router.put('/', );
    }
}

const setting = new Setting();
export default setting.router;