
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _passport = _interopRequireDefault(require('passport'));

const _config = _interopRequireDefault(require('../../../config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ENV_VAR = _config.default.get(process.env.NODE_ENV);

const _require = require('passport-google-token');

const GoogleTokenStrategy = _require.Strategy; // GOOGLE STRATEGY


const GoogleTokenStrategyCallback = function GoogleTokenStrategyCallback(accessToken, refreshToken, profile, done) {
  return done(null, {
    accessToken,
    refreshToken,
    profile,
  });
};

_passport.default.use(new GoogleTokenStrategy({
  clientID: ENV_VAR.GOOGLE_CLIENT_ID,
  clientSecret: ENV_VAR.GOOGLE_CLIENT_SECRET,
}, GoogleTokenStrategyCallback));

const authenticateGoogle = function authenticateGoogle(req, res) {
  return new Promise(((resolve, reject) => {
    _passport.default.authenticate('google-token', {
      session: false,
    }, (err, data, info) => {
      if (err) reject(err);
      resolve({
        data,
        info,
      });
    })(req, res);
  }));
};

const _default = authenticateGoogle;
exports.default = _default;
