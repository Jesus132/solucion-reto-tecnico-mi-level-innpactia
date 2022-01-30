import { Router, Request, Response } from 'express';
import { logInUsers, signUpUsers } from './controller/user.controller';


class Auth {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/login', logInUsers);
        this.router.post('/signup', signUpUsers);
    }
}

const auth = new Auth();
export default auth.router;