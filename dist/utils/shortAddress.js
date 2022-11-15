"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortAddress = void 0;

var shortAddress = function shortAddress(address) {
  return address.replace(address.substring(6, 36), "...");
};

exports.shortAddress = shortAddress;