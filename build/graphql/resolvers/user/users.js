"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../../../models/user"));

var _default = {
  Query: {
    users: function users() {
      return _user["default"].find({});
    }
  }
};
exports["default"] = _default;