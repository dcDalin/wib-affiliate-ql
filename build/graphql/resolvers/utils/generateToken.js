"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../../config"));

var ENV_VAR = _config["default"].get(process.env.NODE_ENV);

var generateToken = function generateToken(user) {
  return _jsonwebtoken["default"].sign({
    id: user.id,
    username: user.username
  }, ENV_VAR.APP_SECRET, {
    expiresIn: '1h'
  });
}; // eslint-disable-next-line import/prefer-default-export


exports.generateToken = generateToken;