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
import React, { useState } from 'react';
import Payments from 'metaoneer-payment';

const API_KEY = 'Your API_KEY';
const config = { // Your Config (option)
  icon: "https://... or ./public/test.png"
  project: "Your Project"
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
        <Payments apiKey={API_KEY} config={config} close={closeHandler} />
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

Node.js module polyfills are not provided by default in webpack v5 and later. Therefore, you need to install the missing modules and add them to the resolve.fallback property of the webpack.config.js file in the form below.

```js
module.exports = {
    ...
    resolve: {
        fallback: {
            fs: false,
            net: false,
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            ...
        },
    },
}

// config-overrides.js
```

More information on migrating to webpack v5 can be found [here](https://webpack.js.org/migrate/5/#clean-up-configuration).

If you are implementing an app using create-react-app, you can use react-app-rewired to add the above polyfills to the webpack.config.js file used by CRA. More information on using react-app-rewired with create-react-app can be found [here](https://www.npmjs.com/package/react-app-rewired).

[Reference from caver-js](https://github.com/klaytn/caver-js#using-webpack--5)

- Buffer Error

```
ReferenceError : Buffer is not defined
```

Node.js buffer errors may occur.
Please add the code as below.

```js
window.Buffer = window.Buffer || require("buffer").Buffer;

// Your Code
```

Happy hacking! http://localhost:3000/
