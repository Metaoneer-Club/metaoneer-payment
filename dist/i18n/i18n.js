"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _locales = require("./locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = {
  en: {
    translation: _locales.en
  },
  ko: {
    translation: _locales.ko
  }
};

_i18next.default.use(_reactI18next.initReactI18next).init({
  resources: resources,
  lng: "ko",
  fallbackLng: {
    en: ["en"],
    default: ["ko"]
  },
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

var _default = _i18next.default;
exports.default = _default;