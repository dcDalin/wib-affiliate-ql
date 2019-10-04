"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _config = _interopRequireDefault(require("../../../config"));

var ENV_VAR = _config["default"].get(process.env.NODE_ENV);

var _require = require('passport-google-token'),
    GoogleTokenStrategy = _require.Strategy; // GOOGLE STRATEGY


var GoogleTokenStrategyCallback = function GoogleTokenStrategyCallback(accessToken, refreshToken, profile, done) {
  return done(null, {
    accessToken: accessToken,
    refreshToken: refreshToken,
    profile: profile
  });
};

_passport["default"].use(new GoogleTokenStrategy({
  clientID: ENV_VAR.GOOGLE_CLIENT_ID,
  clientSecret: ENV_VAR.GOOGLE_CLIENT_SECRET
}, GoogleTokenStrategyCallback));

var authenticateGoogle = function authenticateGoogle(req, res) {
  return new Promise(function (resolve, reject) {
    _passport["default"].authenticate('google-token', {
      session: false
    }, function (err, data, info) {
      if (err) reject(err);
      resolve({
        data: data,
        info: info
      });
    })(req, res);
  });
};

var _default = authenticateGoogle;
exports["default"] = _default;