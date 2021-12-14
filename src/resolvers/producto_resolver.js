const productoResolver = {
    Query: {
        productos: (_, { ProductosList }, { dataSources }) => {
            return dataSources.productoAPI.getProductos(ProductosList);
        },
        productoById: (_, { productoId }, { dataSources }) => {
            return dataSources.productoAPI.getProductoById(productoId);
        },
        productoByCategoria: (_, { productoCategoria }, { dataSources }) => {
            return dataSources.productoAPI.getProductoByCategoria(productoCategoria);
        }
    },
    Mutation: {
        nuevoProducto: async(_, { producto }, { dataSources }) => {
            return dataSources.productoAPI.nuevoProducto(producto)

        }

    }
};

module.exports = productoResolver;