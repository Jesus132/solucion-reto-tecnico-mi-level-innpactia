import { Request, Response} from 'express';
import Clients from '../../../models/clients';

export const getClient = async (req: Request, res: Response) => {
    const clients = await Clients.findAll();
    res.json({ ok: true, clients });
}

export const postClient = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        console.log(body);
        const client = new Clients(body);
        await client.save();
        res.json({
            ok: true
        });
    } catch (error) {
        res.json({
            ok: false,
            txt: 'Servidor caido!!!'
        });
    }
}

export const putClient = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        txt: 'putClient'
    });
}

export const deletClient = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        txt: 'deletClient'
    });
}