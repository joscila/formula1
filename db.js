const { Sequelize } = require("sequelize");

const conn = new Sequelize({
    dialect: 'sqlite',
    storage: 'conducao.sqlite'
})

module.exports = conn;