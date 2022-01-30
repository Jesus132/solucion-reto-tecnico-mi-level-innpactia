import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Storages = db.define('storages', {
    id_client: {
        type: DataTypes.BIGINT
    },
    model: {
        type: DataTypes.STRING
    },
    observation: {
        type: DataTypes.STRING
    },
});

export default Storages;