const Sequelize = require('sequelize');

let [banco, usuario, senha] = ['', '', '']

const connection = new Sequelize(banco, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;