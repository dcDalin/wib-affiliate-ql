
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.generateToken = void 0;

const _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

const _config = _interopRequireDefault(require('../../../config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ENV_VAR = _config.default.get(process.env.NODE_ENV);

const generateToken = function generateToken(user) {
  return _jsonwebtoken.default.sign({
    id: user.id,
    username: user.username,
  }, ENV_VAR.APP_SECRET, {
    expiresIn: '1h',
  });
}; // eslint-disable-next-line import/prefer-default-export


exports.generateToken = generateToken;
