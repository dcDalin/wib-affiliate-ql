
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _mongoose = require('mongoose');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise(((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); }));
  };
}

const userSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  phone: {
    phoneNumber: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  password: String,
  social: {
    googleProvider: {
      id: String,
      token: String,
    },
  },
}, {
  timestamps: true,
}, {
  strict: true,
});

userSchema.statics.upsertGoogleUser =
/* #__PURE__ */
(function () {
  const _genGoogleTok = _asyncToGenerator(
  /* #__PURE__ */
    regeneratorRuntime.mark(function _callee(_ref) {
      let accessToken; let profile; let User; let user; let
        newUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              accessToken = _ref.accessToken, profile = _ref.profile;
              User = this;
              _context.next = 4;
              return User.findOne({
                'social.googleProvider.id': profile.id,
              });

            case 4:
              user = _context.sent;

              if (user) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return User.create({
                username: profile.displayName || ''.concat(profile.familyName, ' ').concat(profile.givenName),
                email: {
                  emailAddress: profile.emails[0].value,
                  isVerified: true,
                },
                'social.googleProvider': {
                  id: profile.id,
                  token: accessToken,
                },
              });

            case 8:
              newUser = _context.sent;
              return _context.abrupt('return', newUser);

            case 10:
              return _context.abrupt('return', user);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }),
  );

  function genGoogleTok(_x) {
    return _genGoogleTok.apply(this, arguments);
  }

  return genGoogleTok;
}());

const _default = (0, _mongoose.model)('User', userSchema);

exports.default = _default;
