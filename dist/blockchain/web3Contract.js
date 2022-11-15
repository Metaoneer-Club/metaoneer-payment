"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentContract = exports.CONTRACT_ADDRESS = void 0;

var _web = require("./web3");

var paymentABI = [{
  inputs: [{
    internalType: "contract ITESTNFT",
    name: "_NFT",
    type: "address"
  }],
  stateMutability: "payable",
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
  inputs: [{
    internalType: "uint256",
    name: "_key",
    type: "uint256"
  }, {
    internalType: "string",
    name: "_title",
    type: "string"
  }, {
    internalType: "uint256",
    name: "_count",
    type: "uint256"
  }],
  name: "payment",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint256",
    name: "key",
    type: "uint256"
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
  inputs: [{
    internalType: "string",
    name: "_title",
    type: "string"
  }, {
    internalType: "uint256",
    name: "_price",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_count",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "_limit",
    type: "uint256"
  }],
  name: "prepareKeyRegister",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "withdraw",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "getreceipt",
  outputs: [{
    internalType: "uint256",
    name: "key",
    type: "uint256"
  }, {
    internalType: "string",
    name: "title",
    type: "string"
  }, {
    internalType: "uint256",
    name: "price",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "count",
    type: "uint256"
  }, {
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "uint256",
    name: "limit",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "lastKey",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "myAddress",
    type: "address"
  }],
  name: "myKeyLength",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "myAddress",
    type: "address"
  }],
  name: "myKeyList",
  outputs: [{
    internalType: "uint256[]",
    name: "",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
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
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "NFT",
  outputs: [{
    internalType: "contract ITESTNFT",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "prepareKeypool",
  outputs: [{
    internalType: "uint256",
    name: "key",
    type: "uint256"
  }, {
    internalType: "string",
    name: "title",
    type: "string"
  }, {
    internalType: "uint256",
    name: "price",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "count",
    type: "uint256"
  }, {
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "uint256",
    name: "limit",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];
var paymentContract, CONTRACT_ADDRESS;
exports.CONTRACT_ADDRESS = CONTRACT_ADDRESS;
exports.paymentContract = paymentContract;

if (typeof window !== "undefined") {
  exports.CONTRACT_ADDRESS = CONTRACT_ADDRESS = _web.WALLET_NETWORK === "56" ? "0xB535450F3Ca1a711931594Dcfca075B918D996AC" : "0xB535450F3Ca1a711931594Dcfca075B918D996AC";
  exports.paymentContract = paymentContract = new _web.web3.eth.Contract(paymentABI, CONTRACT_ADDRESS);
}