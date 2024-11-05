const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    productId: String
    brand: String
    productTitle: String
    items: [String]
    images: String
  }

  type Query {
    products: [Product]
  }
`;

module.exports = typeDefs;