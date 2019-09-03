
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _user = _interopRequireDefault(require('../../../models/user'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _default = {
  Query: {
    users: function users() {
      return _user.default.find({});
    },
  },
};
exports.default = _default;
