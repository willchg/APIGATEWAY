const transactionResolver = {
    Query: {
        compraByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.productoAPI.getCompraByUsername(username)
            else
                return null
        }
    },
    Mutation: {
        nuevaCompra: async(_, { compra }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (compra.username == usernameToken)
                return dataSources.productoAPI.nuevaCompra(compra)
            else
                return null
        }



    }
};

module.exports = transactionResolver;