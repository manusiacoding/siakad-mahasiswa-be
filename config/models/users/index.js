const Sequelize = require('sequelize');
const db = require('../../database');
const users = {}

users.td_users = db.define('td_users',
    {
        id_users: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        nim: Sequelize.STRING,
        nama_lengkap: Sequelize.TEXT,
        alamat: Sequelize.TEXT
    },
    {
        schema: 'mahasiswa',
        freezeTableName: true, 
        timestamps: false
    }
)

module.exports = users