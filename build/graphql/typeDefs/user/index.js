
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _apolloServerExpress = require('apollo-server-express');

function _templateObject() {
  const data = _taggedTemplateLiteral(['\n  extend type Query {\n    users: [User]\n  }\n\n  extend type Mutation {\n    userSignUp(userSignUpInput: UserSignUpInput): User!\n    authGoogle(input: AuthInput!): AuthResponse\n  }\n\n  type User {\n    id: ID!\n    username: String!\n    email: Email!\n    phone: Phone\n    token: String\n  }\n\n  type Email {\n    emailAddress: String!\n    isVerified: Boolean\n  }\n\n  type Phone {\n    phoneNumber: String\n    isVerified: Boolean\n  }\n\n  type AuthResponse {\n    token: String\n    name: String\n  }\n\n  input UserSignUpInput {\n    username: String!\n    emailAddress: String!\n    password: String!\n    confirmPassword: String!\n  }\n\n  input AuthInput {\n    accessToken: String!\n  }\n']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const _default = (0, _apolloServerExpress.gql)(_templateObject());

exports.default = _default;
