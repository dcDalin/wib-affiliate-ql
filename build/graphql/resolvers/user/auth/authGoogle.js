
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _user = _interopRequireDefault(require('../../../../models/user'));

const _generateToken = require('../../utils/generateToken');

const _passport = _interopRequireDefault(require('../../utils/passport'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise(((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); }));
  };
}

const _default = {
  Mutation: {
    authGoogle: (function () {
      const _authGoogle = _asyncToGenerator(
      /* #__PURE__ */
        regeneratorRuntime.mark(function _callee(_, _ref, _ref2) {
          let accessToken; let req; let res; let _ref3; let data; let info; let user; let
            token;

          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  accessToken = _ref.input.accessToken;
                  req = _ref2.req, res = _ref2.res;
                  req.body = _objectSpread({}, req.body, {
                    access_token: accessToken,
                  });
                  _context.prev = 3;
                  _context.next = 6;
                  return (0, _passport.default)(req, res);

                case 6:
                  _ref3 = _context.sent;
                  data = _ref3.data;
                  info = _ref3.info;

                  if (!data) {
                    _context.next = 16;
                    break;
                  }

                  _context.next = 12;
                  return _user.default.upsertGoogleUser(data);

                case 12:
                  user = _context.sent;
                  token = (0, _generateToken.generateToken)(data);

                  if (!user) {
                    _context.next = 16;
                    break;
                  }

                  return _context.abrupt('return', {
                    name: user.username,
                    token,
                  });

                case 16:
                  if (!info) {
                    _context.next = 22;
                    break;
                  }

                  _context.t0 = info.code;
                  _context.next = _context.t0 === 'ETIMEDOUT' ? 20 : 21;
                  break;

                case 20:
                  return _context.abrupt('return', new Error('Failed to reach Google: Try Again'));

                case 21:
                  return _context.abrupt('return', new Error('something went wrong'));

                case 22:
                  return _context.abrupt('return', Error('server error'));

                case 25:
                  _context.prev = 25;
                  _context.t1 = _context.catch(3);
                  return _context.abrupt('return', _context.t1);

                case 28:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 25]]);
        }),
      );

      function authGoogle(_x, _x2, _x3) {
        return _authGoogle.apply(this, arguments);
      }

      return authGoogle;
    }()),
  },
};
exports.default = _default;
