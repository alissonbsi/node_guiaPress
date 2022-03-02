const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// exportar para que outros arquivos o utilizem
module.exports = connection;