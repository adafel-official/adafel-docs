---
sidebar_position: 0
---

# Introduction

The Adafel Solidity Library is used to interact with Adafel machine learning precompiles from solidity.

# Supported ML algorithms:

- **Linear Regression**: Train and predict using linear regression models.
- **Logistic Regression**: Train and predict using logistic regression models.
- **K-Nearest Neighbors (KNN)**: Train and predict using KNN regression and classification models.
- **Decision Tree**: Train and predict using decision tree regression and classification models.
- **Random Forest**: Train and predict using random forest regression and classification models.

...and more coming soon

## Installation:

Hardhat installation

```bash
npm i @adafel/adafel-solidity
```

## Import Dependencies

```javascript
import "@adafel/adafel-solidity/contracts/v0.1/MachineLearningLib.sol";
```

# Linear Regression

## Prepare data

The accepted input data format is in the form of matrix where the data is MxN `int64` matrix and label is of type `int64[]` with corresponding size.

```javascript
int64[][] memory data = ...; // Your training data
int64[] memory labels = ...; // Your training labels
```

## Train model

To train the model from the data pass in the approprite ML algorithm

```javascript
// Linear Regression
// Solver: SVD Decomposition
bytes memory model = MachineLearningLib.trainLinearRegression(data, labels);

// Logistic Regression
// Solver: Limited-memory Broyden–Fletcher–Goldfarb–Shanno (LBFGS) method
bytes memory model = MachineLearningLib.trainLogisticRegression(data, labels);

// KNN Regression
// Search algorithm: CoverTree
// K: 3
bytes memory model = MachineLearningLib.trainKNNRegression(data, labels);

// KNN Classification
// Search algorithm: CoverTree
// K: 3
bytes memory model = MachineLearningLib.trainKNNClassification(data, labels);

// Decision Tree Regression
bytes memory model = MachineLearningLib.trainDecisionTreeRegression(data, labels);

// Decision Tree Classification
bytes memory model = MachineLearningLib.trainDecisionTreeClassification(data, labels);

// Random Forest Regression
// Max Number of trees: 100
bytes memory model = MachineLearningLib.trainRandomForestRegression(data, labels);

// Random Forest Classification
// Max Number of trees: 100
bytes memory model = MachineLearningLib.trainRandomForestClassification(data, labels);
```

## Train model CID

Adafel protocol enables the users to train model by passing in the data CID, training column indices, and label index

**Input format:**

```javascript
bytes memory cid = ...; // Data CID in bytes
int64[] memory train_indices = ...; // Column indices to be included in training set
uint32 label_index = ...; // Column index for label data
```

**Training functions**

```javascript
// Linear Regression
bytes memory model = MachineLearningLib.trainLinearRegressionFromCid(cid, train_indices, label_index);

// Logistic Regression
bytes memory model = MachineLearningLib.trainLogisticRegressionFromCid(cid, train_indices, label_index);

// KNN Regression
bytes memory model = MachineLearningLib.trainKNNRegressionFromCid(cid, train_indices, label_index);

// KNN Classification
bytes memory model = MachineLearningLib.trainKNNClassificationFromCid(cid, train_indices, label_index);

// Decision Tree Regression
bytes memory model = MachineLearningLib.trainDecisionTreeRegressionFromCid(cid, train_indices, label_index);

// Decision Tree Classification
bytes memory model = MachineLearningLib.trainDecisionTreeClassificationFromCid(cid, train_indices, label_index);

// Random Forest Regression
bytes memory model = MachineLearningLib.trainRandomForestRegressionFromCid(cid, train_indices, label_index);

// Random Forest Classification
bytes memory model = MachineLearningLib.trainRandomForestClassificationFromCid(cid, train_indices, label_index);
```

## Making Predictions

To make the predictions, pass in the test data matrix and the serialized model in bytes

```javascript
// Linear Regression
int64[] memory predictions = MachineLearningLib.predictLinearRegression(data, model);

// Logistic Regression
int64[] memory predictions = MachineLearningLib.predictLogisticRegression(data, model);

// KNN Regression
int64[] memory predictions = MachineLearningLib.predictKNNRegression(data, model);

// KNN Classification
int64[] memory predictions = MachineLearningLib.predictKNNClassification(data, model);

// Decision Tree Regression
int64[] memory predictions = MachineLearningLib.predictDecisionTreeRegression(data, model);

// Decision Tree Classification
int64[] memory predictions = MachineLearningLib.predictDecisionTreeClassification(data, model);

// Random Forest Regression
int64[] memory predictions = MachineLearningLib.predictRandomForestRegression(data, model);

// Random Forest Classification
int64[] memory predictions = MachineLearningLib.predictRandomForestClassification(data, model);
```
