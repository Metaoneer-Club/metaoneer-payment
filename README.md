# Metaoneer Payment

This is a module that supports payment on the Klaytn network

- Chain Id : 8217, 1001
- Supported Wallet : Metamask, Kaikas
- React + TypeScript + Styled-Components

## Installation

---

```
npm install metaoneer-payment
```

## Quick Start

---

```
npx create-react-app my-app
cd my-app
npm install metaoneer-payment
```

```js
import React, { useState } from "react";
import Payments from "metaoneer-payment";

const API_KEY = "Your API_KEY";
// const config = { // Your Config (option)
//   icon: "https://... or ./public/test.png"
//   project: "Your Project"
// };

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
          apiKey={API_KEY}
          // config={config}
          close={closeHandler}
        />
      )}
    </div>
  );
}

export default App;

// src/App.js
```

```

npm start

```

## Known issues

---

- Using webpack >= 5

Node.js module polyfills are not provided by default in webpack v5 and later. Therefore, you need to install the missing modules and add them to the resolve.fallback property of the `webpack.config.js` file in the form below.

```
npm install -D react-app-rewired url buffer stream-browserify os-browserify https-browserify crypto-browserify
```

```js
  "scripts": {
    "start": "set \"GENERATE_SOURCEMAP=false\" && react-app-rewired start",
    "build": "set \"GENERATE_SOURCEMAP=false\" && react-app-rewired build",
  },

// package.json ( Window )
```

```js
  "scripts": {
    "start": "GENERATE_SOURCEMAP=false && react-app-rewired start",
    "build": "GENERATE_SOURCEMAP=false && react-app-rewired build",
  },

// package.json ( Mac )
```

```js
const webpack = require("webpack");

module.exports = {
  webpack: function (config, env) {
    const overridedConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          stream: require.resolve("stream-browserify"),
          crypto: require.resolve("crypto-browserify"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          url: require.resolve("url"),
          buffer: require.resolve("buffer"),
        },
        alias: {
          ...config.resolve.alias,
          buffer: "buffer",
          stream: "stream-browserify",
        },
      },
      plugins: [
        ...config.plugins,
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    };
    return overridedConfig;
  },
};

// config-overrides.js
```

- Buffer Error

Node.js buffer errors may occur. Please add the code as below.

```
ReferenceError : Buffer is not defined
```

```js
window.Buffer = window.Buffer || require("buffer").Buffer;

// Your Code
```

Happy hacking! http://localhost:3000/
