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

var _validateSignup2 = _interopRequireDefault(require("./validateSignup"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  Mutation: {
    userSignUp: function () {
      var _userSignUp = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, _ref) {
        var _ref$userSignUpInput, username, emailAddress, password, confirmPassword, _validateSignup, valid, errors, userUsername, userEmail, hashedPassword, newUser, res, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$userSignUpInput = _ref.userSignUpInput, username = _ref$userSignUpInput.username, emailAddress = _ref$userSignUpInput.emailAddress, password = _ref$userSignUpInput.password, confirmPassword = _ref$userSignUpInput.confirmPassword;
                // Validate user input
                _validateSignup = (0, _validateSignup2["default"])(username, emailAddress, password, confirmPassword), valid = _validateSignup.valid, errors = _validateSignup.errors;

                if (valid) {
                  _context.next = 4;
                  break;
                }

                throw new _apolloServerExpress.UserInputError('Errors', {
                  errors: errors
                });

              case 4:
                _context.next = 6;
                return _user["default"].findOne({
                  username: username
                });

              case 6:
                userUsername = _context.sent;

                if (!userUsername) {
                  _context.next = 9;
                  break;
                }

                throw new _apolloServerExpress.UserInputError('Username is taken', {
                  errors: {
                    username: 'This username is taken'
                  }
                });

              case 9:
                _context.next = 11;
                return _user["default"].findOne({
                  'email.emailAddress': emailAddress
                });

              case 11:
                userEmail = _context.sent;

                if (!userEmail) {
                  _context.next = 14;
                  break;
                }

                throw new _apolloServerExpress.UserInputError('Email exists', {
                  errors: {
                    username: 'Email already exists'
                  }
                });

              case 14:
                _context.next = 16;
                return _bcryptjs["default"].hash(password, 12);

              case 16:
                hashedPassword = _context.sent;
                newUser = new _user["default"]({
                  username: username,
                  email: {
                    emailAddress: emailAddress
                  },
                  password: hashedPassword
                }); // Save to DB

                _context.next = 20;
                return newUser.save();

              case 20:
                res = _context.sent;
                // Generate token
                token = (0, _generateToken.generateToken)(res);
                return _context.abrupt("return", _objectSpread({}, res._doc, {
                  id: res._id,
                  token: token
                }));

              case 23:
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