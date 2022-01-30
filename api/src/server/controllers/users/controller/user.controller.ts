import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import Users from '../../../models/users';

export const logInUsers = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const _email = await Users.findOne({
            where: {
                email: body.email
            }
        });
        if (bcrypt.compareSync(body.password, _email.password)) {
            // // const token = jwt.sign({
            // //     user: {
            // //         id: _email.id,
            // //     }
            // // }, process.env.JWT || 'Develop', {
            // //     expiresIn: '24h'
            // // });
            res.json({
                ok: true
            });
        } else {
            res.json({
                ok: false,
                msg: 'Correo o contraseña son incorrecta!!!'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Servidor caido!!!'
        });
    }
}

export const signUpUsers = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        const _email = await Users.findOne({
            where: {
                email: body.email
            }
        });
        if (_email) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el correo ${body.email}`
            });
        }
        const dbPassword = await bcrypt.hash(body.password, 10);
        body.password = dbPassword;
        const user = new Users(body);
        await user.save();
        res.json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Servidor caido!!!'
        });
    }
}