"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _assets = require("../assets");

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component */
var Pay = function Pay(_ref) {
  var account = _ref.account,
      orderName = _ref.orderName,
      price = _ref.price,
      isConnecting = _ref.isConnecting,
      connectMetamask = _ref.connectMetamask;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "p-wallet-wrapper",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("figure", {
        className: "p-wallet-item ".concat(account && "p-selected"),
        onClick: connectMetamask,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.MetamaskLogo, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("figcaption", {
          className: "p-wallet-item-info",
          children: isConnecting ? "Connecting..." : account && (0, _utils.shortAddress)(account) || "Metamask"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-contents",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "p-contents-header",
          children: "Message :"
        }), t("paymentWarning")]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-info",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [t("totalPrice"), " : "]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-charge",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            className: "p-charge-price",
            children: price > 0.00000001 ? price : "> 0.00000001"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "p-charge-currency",
            children: "BNB"
          })]
        })]
      })]
    })]
  });
};

var _default = Pay;
exports.default = _default;