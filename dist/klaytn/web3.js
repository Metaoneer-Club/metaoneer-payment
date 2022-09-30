"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _web = _interopRequireDefault(require("web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var web3 = new _web["default"](window.ethereum);
var _default = web3;
exports["default"] = _default;