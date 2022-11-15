"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _assets = require("../assets");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component */
var Paid = function Paid(_ref) {
  var network = _ref.network,
      isPaid = _ref.isPaid,
      txHash = _ref.txHash,
      price = _ref.price,
      close = _ref.close,
      closeHandler = _ref.closeHandler;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "p-status-container",
      children: !isPaid ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.LoadingIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "p-loading-info",
          children: t("paymentProgress")
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.CheckIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "p-loading-info",
          children: t("paymentDone")
        })]
      })
    }), isPaid && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "p-result-dialog",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-result-info",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "p-result-tx",
          children: "txHash"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          target: "_blank",
          href: "https://".concat(network === "Testnet" ? "testnet." : "", "bscscan.com/tx/").concat(txHash),
          className: "p-result-tx-number",
          rel: "noreferrer",
          children: txHash.replace(txHash.substring(6, 60), "...")
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-result-info",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "p-result-price",
          children: t("paymentAmount")
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: function onClick(e) {
          closeHandler(e);
          close(e);
        },
        type: "button",
        className: "p-button-cancel",
        children: "X"
      })]
    })]
  });
};

var _default = Paid;
exports.default = _default;