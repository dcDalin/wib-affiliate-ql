"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

var _typeDefs = _interopRequireDefault(require("./graphql/typeDefs"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

var ENV_VAR = _config["default"].get(process.env.NODE_ENV);

var PORT = process.env.PORT || ENV_VAR.APP_PORT;
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var app, server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          app = (0, _express["default"])();
          app.disable('x-powered-by');
          server = new _apolloServerExpress.ApolloServer({
            cors: {
              origin: '*',
              credentials: true
            },
            typeDefs: _typeDefs["default"],
            resolvers: _resolvers["default"],
            context: function context(_ref2) {
              var req = _ref2.req;
              return {
                req: req
              };
            },
            introspection: true,
            playground: process.env.NODE_ENV === 'development'
          });
          server.applyMiddleware({
            app: app
          });
          _context.next = 7;
          return _mongoose["default"].connect(ENV_VAR.MONGODB_URI, {
            useNewUrlParser: true
          });

        case 7:
          // eslint-disable-next-line no-console
          app.listen({
            port: PORT
          }, function () {
            return console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(PORT).concat(server.graphqlPath));
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.error(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 10]]);
}))();