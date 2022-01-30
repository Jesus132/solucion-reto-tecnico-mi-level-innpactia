import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Clients = db.define('clients', {
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
});

export default Clients;