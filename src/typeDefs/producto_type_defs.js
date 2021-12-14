const { gql } = require('apollo-server');

const productoTypeDefs = gql `
    type Producto {
        id: String!
        nombre: String!
        precio: Int!
        categoria: String!
        cantidadcompra: Int!
        stock:  Int!
        fechavencimiento:String!
    }
    type ProductosList{
        nombre: String!
        precio: Int!
        categoria: String!
        fechavencimiento:String!
    }
    type Query {
        productoById(productoId: String!): Producto
        productoByCategoria(productoCategoria: String!): [Producto]
        productos: [ProductosList!]!
        
    }

    input ProductoInput {
        
        nombre: String!
        precio: Int!
        categoria: String!
        cantidadcompra: Int!
        stock:  Int!
        fechavencimiento:String!
    }

    extend type Mutation{
        nuevoProducto(producto: ProductoInput!): Producto
    }
`;
module.exports = productoTypeDefs;