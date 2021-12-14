
const productoResolver = require('./producto_resolver');
const transactionResolver = require('./transaction_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(productoResolver, transactionResolver, authResolver);

module.exports = resolvers;