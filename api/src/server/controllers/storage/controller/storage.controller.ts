import { Request, Response} from 'express';

import { Clients, Storages } from '../../../db/index';
import StoragesDB from '../../../models/storages';

export const getStorage = async (req: Request, res: Response) => {
    const storages = await Storages.findAll({ include: Clients });
    res.json({ ok: true, storages });
}

export const postStorage = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const storage = new StoragesDB(body);
        await storage.save();
        res.json({
            ok: true
        });
    } catch (error) {
        console.log(error);
        
        res.json({
            ok: false,
            txt: 'Servidor caido!!!'
        });
    }
}

export const putStorage = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        txt: 'putClient'
    });
}

export const deletStorage = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        txt: 'deletClient'
    });
}