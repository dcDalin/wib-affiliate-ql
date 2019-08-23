import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
  }

  type User {
    id: ID!
    username: String!
    email: Email!
    phone: Phone!
    token: String
  }

  type Email {
    emailAddress: String!
    isVerified: Boolean
  }

  type Phone {
    phoneNumber: String!
    isVerified: Boolean
  }
`;
