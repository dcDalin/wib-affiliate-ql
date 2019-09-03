
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _apolloServerExpress = require('apollo-server-express');

function _templateObject() {
  const data = _taggedTemplateLiteral(['\n  type Query {\n    _: String\n  }\n  type Mutation {\n    _: String\n  }\n  type Subscription {\n    _: String\n  }\n']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const _default = (0, _apolloServerExpress.gql)(_templateObject());

exports.default = _default;
