"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _web = _interopRequireDefault(require("./web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var abi = [{
  inputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "bytes32",
    name: "key",
    type: "bytes32"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "count",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "price",
    type: "uint256"
  }],
  name: "Payment",
  type: "event"
}, {
  constant: true,
  inputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }, {
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "getreceipt",
  outputs: [{
    internalType: "bytes32",
    name: "key",
    type: "bytes32"
  }, {
    internalType: "string",
    name: "title",
    type: "string"
  }, {
    internalType: "string",
    name: "orderName",
    type: "string"
  }, {
    internalType: "uint256",
    name: "price",
    type: "uint256"
  }, {
    internalType: "address payable",
    name: "owner",
    type: "address"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "lastKey",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "myKeyLength",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "myKeyList",
  outputs: [{
    internalType: "bytes32[]",
    name: "",
    type: "bytes32[]"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }, {
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "myprepareKeypool",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "bytes32",
    name: "_key",
    type: "bytes32"
  }, {
    internalType: "string",
    name: "_title",
    type: "string"
  }, {
    internalType: "string",
    name: "_orderName",
    type: "string"
  }, {
    internalType: "uint256",
    name: "_count",
    type: "uint256"
  }],
  name: "payment",
  outputs: [],
  payable: true,
  stateMutability: "payable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "string",
    name: "_title",
    type: "string"
  }, {
    internalType: "string",
    name: "_orderName",
    type: "string"
  }, {
    internalType: "uint256",
    name: "_price",
    type: "uint256"
  }],
  name: "prepareKeyRegister",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  name: "prepareKeypool",
  outputs: [{
    internalType: "bytes32",
    name: "key",
    type: "bytes32"
  }, {
    internalType: "string",
    name: "title",
    type: "string"
  }, {
    internalType: "string",
    name: "orderName",
    type: "string"
  }, {
    internalType: "uint256",
    name: "price",
    type: "uint256"
  }, {
    internalType: "address payable",
    name: "owner",
    type: "address"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [],
  name: "withdraw",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}];
var web3Contract = new _web["default"].eth.Contract(abi, "0x6a46e3306b5E51965f175E6E15B5cc7D17bA82F5");
var _default = web3Contract;
exports["default"] = _default;