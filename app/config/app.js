require('dotenv').config();

const Sequelize = require('sequelize')

const sequelize = process.env
    ? new Sequelize (process.env)
    : new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DATABASE_URL,
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

    module.exports = sequelize;