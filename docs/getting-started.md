---
sidebar_position: 1
---

# Getting Started with Adafel

## Installation

```bash
npm i @adafel/opendatalibrary-js-sdk
```

## Quickstart

- **Initialize the client instance**

```javascript
// import dependencies and initialize client instance
import { privateKeyToAccount } from 'viem/accounts';
import { OpenDataLibrary, Category } from "@adafel/opendatalibrary-js-sdk";
const privateKey = '0xabc'; // optional

const client = new OpenDataLibrary({
  account: privateKeyToAccount(privateKey), // optional
});

```

:::note
If the private key is not supplied then sdk will use the provider from window.ethereum.
:::

- **Create a new schema**

```javascript
await client.createSchema(
  "demo schema",
  ["col1", "col2", "col3"],
  Category.Gaming
);

```

`` Returns: transaction hash (type 0x${string}). ``
- **Add user analytics**

```javascript
await client.addAnalytics(
  "0x264f9...",
  "demo schema",
  ["columnName1", "columnName2", "columnName3"],
  [1n, 2n, 3n] // adding sample data
);
```
``Returns: transaction hash (type 0x${string}).``

- **Getting all the collected data under a particular schema**

```javascript
await client.getSchemaData(
  "demo schema",
)
```

#### Learn more about How Adafel works

[Concepts](./Concepts/)