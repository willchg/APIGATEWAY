const transactionResolver = {
    Query: {
        transactionByUsername: async(_, { producto }, { dataSources, userIdToken }) => {
            productoToken = (await dataSources.authAPI.getUser(userIdToken)).producto
            if (producto == productoToken)
                return dataSources.accountAPI.transactionByUsername(producto)
            else
                return null
        }
    },
    Mutation: {
        createTransaction: async(_, { transaction }, { dataSources, userIdToken }) => {
            productoToken = (await dataSources.authAPI.getUser(userIdToken)).producto
            if (transaction.productoOrigin == productoToken)
                return dataSources.accountAPI.createTransaction(transaction)
            else
                return null
        }
    }
};

module.exports = transactionResolver;