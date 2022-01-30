import { Sequelize } from 'sequelize';

const db = new Sequelize('innpactia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;