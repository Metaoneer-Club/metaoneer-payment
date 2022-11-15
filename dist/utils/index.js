"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _replaceBalance = require("./replaceBalance");

Object.keys(_replaceBalance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _replaceBalance[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _replaceBalance[key];
    }
  });
});

var _shortAddress = require("./shortAddress");

Object.keys(_shortAddress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _shortAddress[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shortAddress[key];
    }
  });
});