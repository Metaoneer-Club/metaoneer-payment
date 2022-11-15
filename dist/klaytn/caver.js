"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _caverJs = _interopRequireDefault(require("caver-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var caver = new _caverJs.default(window.klaytn);
var _default = caver;
exports.default = _default;