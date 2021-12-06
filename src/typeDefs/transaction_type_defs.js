const { gql } = require('apollo-server');

const transactionTypeDefs = gql `
    type Transaction {
        id: String!
        productoOrigin: String!
        productoDestiny: String!
        value: Int!
        date: String!
    }
    input TransactionInput {
        productoOrigin: String!
        productoDestiny: String!
        value: Int!
    }

    extend type Query {
        transactionByUsername(producto: String!): [Transaction]
    }

    extend type Mutation {
        createTransaction(transaction: TransactionInput!): Transaction
    }
`;
module.exports = transactionTypeDefs;