import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User] @auth
    me: User @auth
  }

  extend type Mutation {
    userSignUp(userSignUpInput: UserSignUpInput): User!
    userLogin(email: String!, password: String!): User!
    authGoogle(input: AuthInput!): AuthResponse
  }

  type User {
    id: ID!
    username: String!
    email: Email!
    phone: Phone
    token: String
    roles: [String!]
  }

  type Email {
    emailAddress: String!
    isVerified: Boolean
  }

  type Phone {
    phoneNumber: String
    isVerified: Boolean
  }

  type AuthResponse {
    token: String
    name: String
  }

  input UserSignUpInput {
    username: String!
    emailAddress: String!
    password: String!
    confirmPassword: String!
  }

  input AuthInput {
    accessToken: String!
  }
`;
