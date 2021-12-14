
//Se llama al typedef (esquema) de cada submodulo
const productoTypeDefs = require('./producto_type_defs');
const transactionTypeDefs = require('./transaction_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, productoTypeDefs, transactionTypeDefs];

//Se exportan
module.exports = schemasArrays;