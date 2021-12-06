const accountResolver = {
    Query: {
        accountByUsername: async(_, { producto }, { dataSources, userIdToken }) => {
            prodcutoToken = (await dataSources.authAPI.getUser(userIdToken)).producto
            if (producto == productoToken)
                return await dataSources.accountAPI.accountByUsername(producto)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = accountResolver;