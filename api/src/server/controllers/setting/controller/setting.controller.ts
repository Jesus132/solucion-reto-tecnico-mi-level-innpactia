import { Request, Response} from 'express';

import { Clients, Settings, Storages } from '../../../db/index';

export const getSetting = async (req: Request, res: Response) => {
    // const settings = await Settings.findAll({ include: Storages });
    const settings = await Settings.findAll({
        include: [
          {model: Storages, include: [Clients] }
        ]
      });
    res.json({ ok: true, settings });
}

export const postSetting = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        const Setting = new Settings(body);
        await Setting.save();
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

export const putSetting = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        txt: 'putClient'
    });
}

export const deletSetting = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        txt: 'deletClient'
    });
}