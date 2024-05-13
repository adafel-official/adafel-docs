---
sidebar_position: 0
---

# Protocol Overview

## Adafel Protocol technical overview

The Adafel protocol is designed to serve as a Machine Learning layer for web3 native dapps adhering to the primary motto of decentralization - transparency, verifiability, and permissionless. The end-to-end onchain ML pipeline gives dapps the freedom to design and customize data analytics strategies and gives the users control over their data and how it is used.

![Onchain ML platform](/img/docs/adafel-onchain-ml-platform.png)

## Data Structure

The data in the Adafel protocol is organized in the form of a master database and multiple child databases with flexible schema designs and columns. Whenever any dapp creates a new schema it has to define the column names and the schema gets registered to the master database. 

Currently, the data type supported is solidity "uint256" for all columns which translates to "bigint" in javascript.

![Data Structure](/img/docs/data-structure.png)

## Onchain Data Computation

Adafel Protocol has natively integrated precompiled contracts supporting the most frequently used machine learning algorithms (KNN, Decision Trees, Logistic Regression, etc.). The data collected from multiple dapps and organized into structured schemas can be directly fed to precompiled ML contracts to predict the computed output onchain.

The ZK Proving contract generates the proofs of computation of precompiled ML models ensuring data integrity.

![adafel rollup](/img/docs/adafel-rollup.png)