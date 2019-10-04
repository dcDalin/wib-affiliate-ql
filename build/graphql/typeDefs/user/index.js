"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  extend type Query {\n    users: [User]\n  }\n\n  extend type Mutation {\n    userSignUp(userSignUpInput: UserSignUpInput): User!\n    authGoogle(input: AuthInput!): AuthResponse\n  }\n\n  type User {\n    id: ID!\n    username: String!\n    email: Email!\n    phone: Phone\n    token: String\n  }\n\n  type Email {\n    emailAddress: String!\n    isVerified: Boolean\n  }\n\n  type Phone {\n    phoneNumber: String\n    isVerified: Boolean\n  }\n\n  type AuthResponse {\n    token: String\n    name: String\n  }\n\n  input UserSignUpInput {\n    username: String!\n    emailAddress: String!\n    password: String!\n    confirmPassword: String!\n  }\n\n  input AuthInput {\n    accessToken: String!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;