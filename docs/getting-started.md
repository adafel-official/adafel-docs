---
sidebar_position: 1
---

# Getting Started with Adafel

## Installation

```bash
npm i @adafel/adafel-solidity
```

## Quickstart

- **Training a linear regression model**

To train a model, call the appropriate training function with your data and labels. For example, to train a linear regression model:

```bash
// import dependencies
import "@adafel/adafel-solidity/contracts/v0.1/MachineLearningLib.sol";

int64[][] memory data = ...; // Your training data
int64[] memory labels = ...; // Your training labels

bytes memory model = MachineLearningLib.trainLinearRegression(data, labels);
```

- **Making Predictions**

To make predictions using a trained model, call the appropriate prediction function with your data and the trained model. For example, to make predictions using a trained linear regression model:

```bash
int64[][] memory data = ...; // Your input data

int64[] memory predictions = MachineLearningLib.predictLinearRegression(data, model);
```

#### Learn more about How Adafel works

[Concepts](./Concepts/)
