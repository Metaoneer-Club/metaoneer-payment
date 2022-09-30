"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _svg = require("../assets/svg");

var _reactI18next = require("react-i18next");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// i18n
var Pay = function Pay(_ref) {
  var currentWallet = _ref.currentWallet,
      mAccount = _ref.mAccount,
      kAccount = _ref.kAccount,
      orderName = _ref.orderName,
      orderDescription = _ref.orderDescription,
      price = _ref.price,
      connectMetamask = _ref.connectMetamask,
      connectKaikas = _ref.connectKaikas;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "p-wallet-wrapper",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("figure", {
        className: "p-wallet-item ".concat(currentWallet === "Metamask" && "p-selected"),
        onClick: connectMetamask,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_svg.MetamaskLogo, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("figcaption", {
          className: "p-wallet-item-info",
          children: currentWallet === "Metamask" && (mAccount === null || mAccount === void 0 ? void 0 : mAccount.replace(mAccount.substring(6, 36), "...")) || "Metamask"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("figure", {
        className: "p-wallet-item ".concat(currentWallet === "Kaikas" && "p-selected"),
        onClick: connectKaikas,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_svg.KaikasLogo, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("figcaption", {
          className: "p-wallet-item-info",
          children: currentWallet === "Kaikas" && (kAccount === null || kAccount === void 0 ? void 0 : kAccount.replace(kAccount.substring(6, 36), "...")) || "Kaikas"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "p-info-wrapper",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-order",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("strong", {
          className: "p-order-label",
          children: [t("orderName"), " : "]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "p-order-name",
          children: orderName
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "p-contents",
        children: orderDescription
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-info",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [t("totalPrice"), " : "]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-charge",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            className: "p-charge-price",
            children: price
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "p-charge-currency",
            children: "klay"
          })]
        })]
      })]
    })]
  });
};

var _default = Pay;
exports["default"] = _default;