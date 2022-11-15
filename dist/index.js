"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _Pay = _interopRequireDefault(require("./components/Pay"));

var _Paid = _interopRequireDefault(require("./components/Paid"));

var _blockchain = require("./blockchain");

var _i18n = _interopRequireDefault(require("./i18n/i18n"));

var _reactI18next = require("react-i18next");

var _assets = require("./assets");

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Payments = function Payments(_ref) {
  var tokenId = _ref.tokenId,
      buyCount = _ref.buyCount,
      config = _ref.config,
      close = _ref.close;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkAPI = _useState2[0],
      setCheckAPI = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = (0, _react.useState)({
    address: "",
    network: 97,
    balance: 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      wallet = _useState6[0],
      setWallet = _useState6[1];

  var _useState7 = (0, _react.useState)("Pending"),
      _useState8 = _slicedToArray(_useState7, 2),
      network = _useState8[0],
      setNetwork = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isLoading = _useState10[0],
      setIsLoading = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isConnecting = _useState12[0],
      setIsConnecting = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isPaid = _useState14[0],
      setIsPaid = _useState14[1];

  var _useState15 = (0, _react.useState)({
    key: 0,
    title: "",
    price: 0,
    count: 1,
    limit: 0
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      paymentInfo = _useState16[0],
      setPaymentInfo = _useState16[1];

  var _useState17 = (0, _react.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      txHash = _useState18[0],
      setTxHash = _useState18[1];

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  (0, _react.useEffect)(function () {
    _i18n.default.changeLanguage(navigator.language);

    var _window = window,
        ethereum = _window.ethereum;

    if (ethereum) {
      ethereum.on("accountsChanged", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _blockchain.setMetamaskAccount)();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, []);
  (0, _react.useEffect)(function () {
    var auth = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var authKey;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _blockchain.paymentContract.methods.prepareKeypool(tokenId).call();

              case 3:
                authKey = _context2.sent;
                authKey.price = (0, _utils.fromBalance)(authKey.price);
                setCheckAPI(true);
                setPaymentInfo(authKey);
                _context2.next = 14;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                setCheckAPI(false);
                setIsError(true);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      return function auth() {
        return _ref3.apply(this, arguments);
      };
    }();

    auth();
  }, [tokenId, setCheckAPI]);

  var connectMetamask = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _window2, ethereum, res;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setIsConnecting(true);
              _window2 = window, ethereum = _window2.ethereum;

              if (!ethereum) {
                _context4.next = 25;
                break;
              }

              _context4.next = 5;
              return ethereum.enable().catch(function () {
                return setIsConnecting(false);
              });

            case 5:
              _context4.next = 7;
              return (0, _blockchain.setMetamaskAccount)();

            case 7:
              res = _context4.sent;

              if (!(res.network === "56")) {
                _context4.next = 12;
                break;
              }

              setNetwork("Mainnet");
              _context4.next = 20;
              break;

            case 12:
              if (!(res.network === "97")) {
                _context4.next = 16;
                break;
              }

              setNetwork("Testnet");
              _context4.next = 20;
              break;

            case 16:
              setNetwork("Not Support");
              _context4.next = 19;
              return (0, _blockchain.changeNetwork)(97).catch(function () {
                return setIsConnecting(false);
              });

            case 19:
              alert("Please re-connected your wallet.");

            case 20:
              setWallet(res);
              setIsConnecting(false);
              ethereum.on("accountsChanged", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var changed;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return (0, _blockchain.setMetamaskAccount)();

                      case 2:
                        changed = _context3.sent;

                        if (!(res.network !== 97)) {
                          _context3.next = 6;
                          break;
                        }

                        _context3.next = 6;
                        return (0, _blockchain.changeNetwork)(97).catch(function () {
                          return setIsConnecting(false);
                        });

                      case 6:
                        setWallet(changed);
                        setIsConnecting(false);

                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })));
              _context4.next = 27;
              break;

            case 25:
              alert("Metamask Wallet is required.");
              window.open("https://metamask.io/download.html");

            case 27:
              setIsConnecting(false);

            case 28:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function connectMetamask() {
      return _ref4.apply(this, arguments);
    };
  }();

  var payingHandler = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setIsLoading(true);

              if (!(wallet.balance < paymentInfo.price)) {
                _context5.next = 5;
                break;
              }

              alert(t("paymentLessBalance"));
              setIsLoading(false);
              return _context5.abrupt("return");

            case 5:
              if (!(paymentInfo.count < buyCount)) {
                _context5.next = 9;
                break;
              }

              alert(t("paymentLessCount"));
              setIsLoading(false);
              return _context5.abrupt("return");

            case 9:
              _context5.prev = 9;
              _context5.next = 12;
              return _blockchain.paymentContract.methods.payment(paymentInfo.key, paymentInfo.title, buyCount).send({
                from: wallet.address,
                to: _blockchain.CONTRACT_ADDRESS,
                gas: 10000000,
                value: (0, _utils.toBalance)(paymentInfo.price) * buyCount
              }).then(function (res) {
                setTxHash(res.transactionHash);
                setIsPaid(true);
              });

            case 12:
              _context5.next = 18;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](9);
              console.log(_context5.t0);
              alert(t("paymentCancel"));

            case 18:
              setIsLoading(false);

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[9, 14]]);
    }));

    return function payingHandler() {
      return _ref6.apply(this, arguments);
    };
  }();

  var closeHandler = function closeHandler() {
    setPaymentInfo({
      key: 0,
      title: "",
      price: 0,
      count: 0,
      limit: 0
    });
    setIsPaid(false);
    setIsError(false);
  };

  if (!checkAPI) return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    id: "metaoneer-payments",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.GlobalStyle, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "p-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "p-loading-container",
        children: !isError ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.LoadingIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "p-loading-info",
            children: t("loading")
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.ErrorIcon, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "p-loading-info",
            children: t("paymentError")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: close,
            type: "button",
            className: "p-button-close",
            children: t("close")
          })]
        })
      })
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    id: "metaoneer-payments",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.GlobalStyle, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "p-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
        className: "p-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-nav",
          children: [config !== null && config !== void 0 && config.logo ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "p-logo",
            src: config.logo,
            alt: "logo"
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_assets.Logo, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            className: "p-network",
            children: network || "Pending"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "p-title",
          children: (config === null || config === void 0 ? void 0 : config.project) || "Metaoneer Payments"
        })]
      }), isLoading || isPaid ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paid.default, {
        network: network,
        isPaid: isPaid,
        txHash: txHash,
        price: paymentInfo.price * buyCount,
        close: close,
        closeHandler: closeHandler
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Pay.default, {
          account: wallet.address,
          orderName: paymentInfo.title,
          price: paymentInfo.price * buyCount,
          isConnecting: isConnecting,
          connectMetamask: connectMetamask
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
          className: "p-footer",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: payingHandler,
            type: "button",
            className: "p-button-continue",
            disabled: !Boolean(wallet.address) || network === "Not Support",
            children: t("payment")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: close,
            type: "button",
            className: "p-button-cancel",
            children: "X"
          })]
        })]
      })]
    })]
  });
};

var _default = Payments;
exports.default = _default;