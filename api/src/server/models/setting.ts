import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Settings = db.define('setting', {
    id_storages: {
        type: DataTypes.BIGINT
    },
    date: {
        type: DataTypes.STRING
    },
    observation: {
        type: DataTypes.STRING
    },
});

export default Settings;