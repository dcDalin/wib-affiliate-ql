
const _express = _interopRequireDefault(require('express'));

const _apolloServerExpress = require('apollo-server-express');

const _mongoose = _interopRequireDefault(require('mongoose'));

const _config = _interopRequireDefault(require('./config'));

const _typeDefs = _interopRequireDefault(require('./graphql/typeDefs'));

const _resolvers = _interopRequireDefault(require('./graphql/resolvers'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise(((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); }));
  };
}

const ENV_VAR = _config.default.get(process.env.NODE_ENV);

const PORT = process.env.PORT || ENV_VAR.APP_PORT;

_asyncToGenerator(
/* #__PURE__ */
  regeneratorRuntime.mark(function _callee() {
    let app; let
      server;
    return regeneratorRuntime.wrap((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            app = (0, _express.default)();
            app.disable('x-powered-by');
            server = new _apolloServerExpress.ApolloServer({
              typeDefs: _typeDefs.default,
              resolvers: _resolvers.default,
              context: function context(_ref2) {
                const { req } = _ref2;
                return {
                  req,
                };
              },
              introspection: true,
              playground: true,
            });
            server.applyMiddleware({
              app,
            });
            _context.next = 7;
            return _mongoose.default.connect(ENV_VAR.MONGO_URL, {
              useNewUrlParser: true,
            });

          case 7:
          // eslint-disable-next-line no-console
            app.listen({
              port: PORT,
            }, () => console.log('\uD83D\uDE80 Server ready at http://localhost:'.concat(PORT).concat(server.graphqlPath)));
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context.catch(0);
            // eslint-disable-next-line no-console
            console.error(_context.t0);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }),
)();
