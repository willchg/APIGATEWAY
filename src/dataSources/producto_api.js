const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.producto_api_url;
    }
    async getProductos(ProductosList) {
        return await this.get(`productos`, ProductosList);
    }
    async getProductoById(productoId) {
        return await this.get(`productos/${productoId}`);
    }
    async getProductoByCategoria(productoCategoria) {
        return await this.get(`categoriaProducto/${productoCategoria}`);
    }
    async getCompraByUsername(username) {
        return await this.get(`comprasUsuario/${username}`);
    }
    async nuevaCompra(compra) {
        compra = new Object(JSON.parse(JSON.stringify(compra)));
        return await this.post(`Compra`, compra);

    }
    async nuevoProducto(producto) {
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.post(`nuevoProducto`, producto);

    }
}
module.exports = ProductoAPI;