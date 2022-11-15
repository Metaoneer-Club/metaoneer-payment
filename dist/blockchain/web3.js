"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.web3 = exports.WALLET_NETWORK = void 0;

var _web = _interopRequireDefault(require("web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3, WALLET_NETWORK;
exports.WALLET_NETWORK = WALLET_NETWORK;
exports.web3 = web3;

if (typeof window !== "undefined") {
  exports.web3 = web3 = new _web.default(window.ethereum);
  exports.WALLET_NETWORK = WALLET_NETWORK = window.ethereum.networkVersion;
}