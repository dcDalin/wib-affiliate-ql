"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    emailAddress: {
      type: String,
      required: true,
      unique: true
    },
    isVerified: {
      type: Boolean,
      "default": false
    }
  },
  phone: {
    phoneNumber: String,
    isVerified: {
      type: Boolean,
      "default": false
    }
  },
  password: String,
  social: {
    googleProvider: {
      id: String,
      token: String
    }
  }
}, {
  timestamps: true
}, {
  strict: true
});

userSchema.statics.upsertGoogleUser =
/*#__PURE__*/
function () {
  var _genGoogleTok = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var accessToken, profile, User, user, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accessToken = _ref.accessToken, profile = _ref.profile;
            User = this;
            _context.next = 4;
            return User.findOne({
              'social.googleProvider.id': profile.id
            });

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return User.create({
              username: profile.displayName || "".concat(profile.familyName, " ").concat(profile.givenName),
              email: {
                emailAddress: profile.emails[0].value,
                isVerified: true
              },
              'social.googleProvider': {
                id: profile.id,
                token: accessToken
              }
            });

          case 8:
            newUser = _context.sent;
            return _context.abrupt("return", newUser);

          case 10:
            return _context.abrupt("return", user);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function genGoogleTok(_x) {
    return _genGoogleTok.apply(this, arguments);
  }

  return genGoogleTok;
}();

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;