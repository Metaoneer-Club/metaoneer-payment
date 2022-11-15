"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GlobalStyle = require("./GlobalStyle");

Object.keys(_GlobalStyle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _GlobalStyle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GlobalStyle[key];
    }
  });
});

var _svg = require("./svg");

Object.keys(_svg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _svg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _svg[key];
    }
  });
});