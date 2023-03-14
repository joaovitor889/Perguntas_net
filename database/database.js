const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','joaoreis4',{
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;