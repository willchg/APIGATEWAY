const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    type Nuevo {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }

    input usuariosInput {       
       
        username: String!
        password: String!
        name: String!
        email:  String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        email: String!
        
    }
    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }
    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        createUser(usuario: usuariosInput!): Tokens!
    }
    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;
module.exports = authTypeDefs;