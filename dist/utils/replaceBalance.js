"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBalance = exports.fromBalance = void 0;

var _blockchain = require("../blockchain");

var toBalance = function toBalance(balance) {
  return _blockchain.web3.utils.toWei(balance, "ether");
};

exports.toBalance = toBalance;

var fromBalance = function fromBalance(balance) {
  return _blockchain.web3.utils.fromWei(balance, "ether");
};

exports.fromBalance = fromBalance;