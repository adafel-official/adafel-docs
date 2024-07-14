---
sidebar_position: 1
---

# Architecture

## Adafel architecture holistic view

![Architecture](/img/docs/architecture.png)

Components breakdown of the Adafel Protocol:

1. **Storage Layer:**

- Adafel protocol is built on Filecoin IPC Subnet hence it has an inbuilt data storage and retrieval from IPFS and Filecoin through CID (Content Identifier).

2. **Smart Contracts:**

- The Adafel Protocol is EVM compatible and Smart Contracts are used to manage interactions with data stored in Filecoin/IPFS.
- These contracts interact with WASM (WebAssembly) precompiled actors for computational tasks.

3. **WASM Precompiled Actors:**

- WebAssembly precompiled actors are the wrappers around the compute intensive Machine Learning algorithms directly callable from Smart Contracts.
- WASM syscalls are responsible for executing ML training and predictions from the Adafel execution nodes.
- Currently the WASM actors are available for the following ML algorithms - Linear Regresssion, Logistic Regression, KNN, Decision Tree and Random Forest.

4. **CoD (Compute on Demand):**

- This module interacts with compute nodes for processing tasks.
- It handles the distribution and management of computational jobs to the Adafel Network's compute nodes.

5. **Compute Nodes:**

- Adafel execution nodes are also responsible for compute jobs that handle the training and prediction tasks for machine learning models.
- These nodes work together to ensure decentralized computation.

6. **ML Engine:**

- Central to the system, the ML engine handles the training and prediction of machine learning models.
- Interacts with the compute nodes for processing and the consensus module for validation.

7. **Consensus Module:**

- Ensures the integrity and correctness of the computations performed by the compute nodes.
- Implements a "Proof of Compute" mechanism where compute nodes act as validators.
- Voting power is proportional to the number of models trained.
