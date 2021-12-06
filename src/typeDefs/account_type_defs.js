const { gql } = require('apollo-server');

const accountTypeDefs = gql `
    type Account {
        producto: String!
        precio: Int!
        lastChange: String!
    }
    extend type Query {
        accountByUsername(producto: String!): Account
    }
`;
module.exports = accountTypeDefs;