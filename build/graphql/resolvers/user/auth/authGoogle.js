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

var _user = _interopRequireDefault(require("../../../../models/user"));

var _generateToken = require("../../utils/generateToken");

var _passport = _interopRequireDefault(require("../../utils/passport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  Mutation: {
    authGoogle: function () {
      var _authGoogle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var accessToken, req, res, _ref3, data, info, user, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                accessToken = _ref.input.accessToken;
                req = _ref2.req, res = _ref2.res;
                req.body = _objectSpread({}, req.body, {
                  access_token: accessToken
                });
                _context.prev = 3;
                _context.next = 6;
                return (0, _passport["default"])(req, res);

              case 6:
                _ref3 = _context.sent;
                data = _ref3.data;
                info = _ref3.info;

                if (!data) {
                  _context.next = 16;
                  break;
                }

                _context.next = 12;
                return _user["default"].upsertGoogleUser(data);

              case 12:
                user = _context.sent;
                token = (0, _generateToken.generateToken)(data);

                if (!user) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", {
                  name: user.username,
                  token: token
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
                throw new _apolloServerExpress.AuthenticationError('Failed to reach Google: Try again later...', {
                  errors: {
                    auth: 'Failed to reach Google: Try again later...'
                  }
                });

              case 21:
                throw new _apolloServerExpress.AuthenticationError('something went wrong', {
                  errors: {
                    auth: 'something went wrong'
                  }
                });

              case 22:
                return _context.abrupt("return", Error('server error'));

              case 25:
                _context.prev = 25;
                _context.t1 = _context["catch"](3);
                return _context.abrupt("return", _context.t1);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 25]]);
      }));

      function authGoogle(_x, _x2, _x3) {
        return _authGoogle.apply(this, arguments);
      }

      return authGoogle;
    }()
  }
};
exports["default"] = _default;