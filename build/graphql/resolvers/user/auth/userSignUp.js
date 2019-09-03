
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _apolloServerExpress = require('apollo-server-express');

const _bcryptjs = _interopRequireDefault(require('bcryptjs'));

const _user = _interopRequireDefault(require('../../../../models/user'));

const _generateToken = require('../../utils/generateToken');

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
    userSignUp: (function () {
      const _userSignUp = _asyncToGenerator(
      /* #__PURE__ */
        regeneratorRuntime.mark(function _callee(_, _ref) {
          let _ref$userSignUpInput; let username; let emailAddress; let password; let confirmPassword; let userUsername; let userEmail; let hashedPassword; let newUser; let res; let
            token;

          return regeneratorRuntime.wrap((_context) => {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _ref$userSignUpInput = _ref.userSignUpInput, username = _ref$userSignUpInput.username, emailAddress = _ref$userSignUpInput.emailAddress, password = _ref$userSignUpInput.password, confirmPassword = _ref$userSignUpInput.confirmPassword;
                  _context.next = 3;
                  return _user.default.findOne({
                    username,
                  });

                case 3:
                  userUsername = _context.sent;

                  if (!userUsername) {
                    _context.next = 6;
                    break;
                  }

                  throw new _apolloServerExpress.UserInputError('Username is taken', {
                    errors: {
                      username: 'This username is taken',
                    },
                  });

                case 6:
                  _context.next = 8;
                  return _user.default.findOne({
                    'email.emailAddress': emailAddress,
                  });

                case 8:
                  userEmail = _context.sent;

                  if (!userEmail) {
                    _context.next = 11;
                    break;
                  }

                  throw new _apolloServerExpress.UserInputError('Email exists', {
                    errors: {
                      username: 'Email already exists',
                    },
                  });

                case 11:
                  _context.next = 13;
                  return _bcryptjs.default.hash(password, 12);

                case 13:
                  hashedPassword = _context.sent;
                  newUser = new _user.default({
                    username,
                    email: {
                      emailAddress,
                    },
                    password: hashedPassword,
                  }); // Save to DB

                  _context.next = 17;
                  return newUser.save();

                case 17:
                  res = _context.sent;
                  // Generate token
                  token = (0, _generateToken.generateToken)(res);
                  return _context.abrupt('return', _objectSpread({}, res._doc, {
                    id: res._id,
                    token,
                  }));

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }),
      );

      function userSignUp(_x, _x2) {
        return _userSignUp.apply(this, arguments);
      }

      return userSignUp;
    }()),
  },
};
exports.default = _default;
