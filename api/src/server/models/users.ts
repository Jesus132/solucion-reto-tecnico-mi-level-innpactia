import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Users = db.define('Users', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
});

export default Users;