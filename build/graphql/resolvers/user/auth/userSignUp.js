"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServerExpress = require("apollo-server-express");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _user = _interopRequireDefault(require("../../../../models/user"));

var _generateToken = require("../../utils/generateToken");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  Mutation: {
    userSignUp: function () {
      var _userSignUp = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, _ref) {
        var _ref$userSignUpInput, username, emailAddress, password, confirmPassword, userUsername, userEmail, hashedPassword, newUser, res, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$userSignUpInput = _ref.userSignUpInput, username = _ref$userSignUpInput.username, emailAddress = _ref$userSignUpInput.emailAddress, password = _ref$userSignUpInput.password, confirmPassword = _ref$userSignUpInput.confirmPassword;
                _context.next = 3;
                return _user["default"].findOne({
                  username: username
                });

              case 3:
                userUsername = _context.sent;

                if (!userUsername) {
                  _context.next = 6;
                  break;
                }

                throw new _apolloServerExpress.UserInputError('Username is taken', {
                  errors: {
                    username: 'This username is taken'
                  }
                });

              case 6:
                _context.next = 8;
                return _user["default"].findOne({
                  'email.emailAddress': emailAddress
                });

              case 8:
                userEmail = _context.sent;

                if (!userEmail) {
                  _context.next = 11;
                  break;
                }

                throw new _apolloServerExpress.UserInputError('Email exists', {
                  errors: {
                    username: 'Email already exists'
                  }
                });

              case 11:
                _context.next = 13;
                return _bcryptjs["default"].hash(password, 12);

              case 13:
                hashedPassword = _context.sent;
                newUser = new _user["default"]({
                  username: username,
                  email: {
                    emailAddress: emailAddress
                  },
                  password: hashedPassword
                }); // Save to DB

                _context.next = 17;
                return newUser.save();

              case 17:
                res = _context.sent;
                // Generate token
                token = (0, _generateToken.generateToken)(res);
                return _context.abrupt("return", _objectSpread({}, res._doc, {
                  id: res._id,
                  token: token
                }));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function userSignUp(_x, _x2) {
        return _userSignUp.apply(this, arguments);
      }

      return userSignUp;
    }()
  }
};
exports["default"] = _default;