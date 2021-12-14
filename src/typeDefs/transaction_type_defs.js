const { gql } = require('apollo-server');

const transactionTypeDefs = gql `
    type Compra{
        id: String!
        username: String!
        productos: [Producto]
        fechaventa: String!
        totalcompra: Int!
    }
    type Productos {
        id: String!
        nombre: String!
        precio: Int!
        categoria: String!
        cantidadcompra: Int!
        stock:  Int!
        fechavencimiento:String!

    }
    
    input CompraInput{
        username: String!
        productos: [Productos!]
        fechaventa: String!
    }

    input Productos {
        id: String!
        nombre: String!
        precio: Int!
        categoria: String!
        cantidadcompra: Int!
        stock:  Int!
        fechavencimiento:String!
    }


    extend type Query {
        compraByUsername(username: String!): [Compra]
    }
    extend type Mutation{
        nuevaCompra(compra: CompraInput!): Compra
    }
    
`;
module.exports = transactionTypeDefs;