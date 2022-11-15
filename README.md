# Metaoneer Payment

This is a module that supports payment on the Binance Smart Chain network.

- Supported Chain : 56(BnB Mainnet), 97(BnB Testnet)
- Supported Wallet : Metamask

Written in React + TypeScript + Styled-Components.

```
Mainnet CA : Comming Soon!
Testnet CA : 0xB535450F3Ca1a711931594Dcfca075B918D996AC
```

## Installation

```
npm install metaoneer-payment
```

## How to Register the Product?

1. Move to [Service Page (Temp)](http://nfps.metaoneer.club.s3-website.ap-northeast-2.amazonaws.com/) and `To Create`!

2. Use `web3` and `sendTransaction` like this.

```ts
import Web3 from "web3";

interface Params {
  _title: string;
  _price: number;
  _count: number; // limit === 1 ? number | 1
  _limit: 0 | 1;
}

const web3 = new Web3(window.ethereum);
const web3Contract: any = new web3.eth.Contract(
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "prepareKeyRegister",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  CONTRACT_ADDRESS
);

await web3Contract.methods
  .preapreKeyRegister(_title, _price, _count, _limit)
  .send();

// example.ts
```

## Quick Start

```
npx create-react-app my-app
cd my-app
npm install metaoneer-payment
npm start
```

```tsx
import React, { useState } from "react";
import Payments from "metaoneer-payment";

const TOKEN_ID = "Your NFT_TOKEN_ID"; // number
const BUY_COUNT = "The amount you want"; // number
const config = {
  // Your Config (option)
  icon: "https://... or ./public/test.png", // Size - 40 * 40 px
  project: "Your Project Name",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openHandler}>Open Payment</button>
      {isOpen && (
        <Payments
          tokenId={TOKEN_ID}
          buyCount={BUY_COUNT}
          config={config}
          close={closeHandler}
        />
      )}
    </div>
  );
}

export default App;

// src/App.js
```

Happy hacking! http://localhost:3000/
