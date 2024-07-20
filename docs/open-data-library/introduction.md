---
sidebar_position: 0
---

# Introduction

Open Data Library (ODL) is the JS/TS SDK for Adafel Protocol

Open Data Library provides a comprehensive interface for users to interact with the Adafel Protocol used to operate on the data layer. The ODL is used to call the data collection and aggregation smart contracts and provides the following functionalities:

- Schema Creation
- Data Collection
- Data Aggregation
- ML Computation
- Fetching Analytics

# Installation

```bash
npm i @adafel/opendatalibrary-js-sdk
```

# TODO: Add detailing

## Quickstart

1. Initialize the client instance

```
import { privateKeyToAccount } from 'viem/accounts';
import { OpenDataLibrary, Category } from "@adafel/opendatalibrary-js-sdk";
const privateKey = '0xabc'; // optional

const client = new OpenDataLibrary({
  account: privateKeyToAccount(privateKey), // optional
});
```

Note: if the private key is not supplied then sdk will use provider from `window.ethereum`.

2. Reading Data from CSV
   You can read data from a CSV file and format it for use with the library:

```javascript
const csvPath = "./data.csv";
const inputColumns = ["column1", "column2"];
const labelColumn = "label";

const [inputData, labels] = await odl.getDataFromCSV(
  csvPath,
  inputColumns,
  labelColumn
);
```

3. Adding Data to the Blockchain
   To add data to the blockchain, use the `addData` method:

```javascript
const schemaName = "MySchema";
const columns = ["column1", "column2"];
const category = Category.Gaming;
const data = inputData;

await odl.addData(schemaName, columns, category, data);
```

4. Training a Model
   You can train different models using the provided methods. For example, to train a linear regression model:

```javascript
const modelName = "MyLinearRegressionModel";

await odl.trainLinearRegressionOffChainData(inputData, labels, modelName);
```

5. Upload data to IPFS
   Incase the data size is large, one can upload data to IPFS

```javascript
const csvPath = "<PATH TO CSV>";

const cid = await odl.uploadCidDataToIPFS(csvPath);
```

6. Train model from data CID
   With Adafel it is possible to train the model by passing the data CID

```javascript
// Data CID
// Expected data is MxN matrix of integer data
// Eg: [[1, 2, 3], [4, 5, 6]]
const cid = "Qm...";

const cidInput = getCidBytes(cid); // Cid in bytes format
const train_indices = [0, 1...]; // Indices of training columns
const label_index: 2;
const modelName = "my_model";

await trainLinearRegressionFromCid(cidInput, train_indices, label_index, modelName);
```

7. Making Predictions
   To make predictions using a trained model:

```javascript
const predictions = await odl.predictLinearRegressionOnchainModel(
  modelName,
  inputData
);
```
