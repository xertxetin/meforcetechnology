<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/network.svg" width="120" alt="CetinDB Network Logo" />
  <h1>CetinDB Network Core</h1>
  <p><em>Enterprise-Grade, Browser-First Directed Acyclic Graph (DAG) Infrastructure</em></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)](https://webrtc.org/)
</div>

<br />

## 🌌 Executive Summary

**CetinDB Network** is a next-generation decentralized infrastructure protocol fundamentally reimagining how consensus networks operate. By completely dismantling the reliance on centralized RPC endpoints and monolithic node structures, CetinDB introduces a frictionless, inherently scalable **WebRTC-powered Directed Acyclic Graph (DAG)**. 

Designed for mass adoption without sacrificing architectural integrity, the CetinDB Core allows any environment—from an everyday mobile web browser to dedicated enterprise server racks—to natively join the mesh, validate transactions, and secure the network. It bridges the gap between complex cryptographic ledgers and seamless, consumer-ready accessibility.

---

## ⚡ Key Innovations & Value Proposition

### 1. Browser-Native WebRTC Mesh
Unlike traditional blockchains requiring heavy daemon installations, CetinDB operates completely within standard web environments. 
*   **Zero-Friction Onboarding:** Users become active backbone participants simply by opening a webpage.
*   **True P2P Topology:** Utilizing WebRTC's advanced NAT traversal, nodes connect directly to one another globally, reducing latency and eliminating single points of failure.
*   **Decentralized by Default:** Everyone is a full actor. There are no "light clients" relying on centralized infrastructure providers.

### 2. High-Throughput DAG Architecture
CetinDB forsakes the traditional bottleneck of linear block production for a multidimensional **Directed Acyclic Graph**.
*   **Asynchronous Validation:** Transactions validate multiple previous transactions, weaving a cryptographically secure, infinitely scalable web.
*   **Near-Instant Finality:** Network consensus is achieved rapidly as network density increases.
*   **Deflationary Resource Cost:** The more users on the network, the faster and more resilient the validation process becomes.

### 3. Enterprise-Ready Desktop & Server Nodes
For institutional validators, data availability layers, and dedicated miners, the **CetinDB Desktop Node** (via Electron & LevelDB) unlocks the full capability of the host machine.
*   **Infinite Storage Scaling:** Moving beyond IndexedDB browser limits, deploying massive on-disk ledgers natively.
*   **Uncapped Compute:** Multi-threaded sha-256 hashing without browser execution timeouts or CPU throttling.

---

## 🛡️ Uncompromising Security & Cryptography

At the heart of the network is a modular, battle-tested cryptographic suite ensuring absolute data integrity and user privacy.

*   **Schnorr Signatures (secp256k1):** Utilizing state-of-the-art elliptic curve cryptography for compact, highly secure, and mathematically elegant signature aggregation.
*   **NIP-44 Encrypted Payloads:** Implementing modern XChaCha20-Poly1305 authenticated encryption, guaranteeing that peer-to-peer data transfers remain strictly confidential and tamper-proof against man-in-the-middle vectors.
*   **Dynamic Proof-of-Work (dPoW):** An adaptive algorithmic difficulty mechanism prevents spam, stabilizes block generation cadences, and maintains rigorous economic consensus.

---

## 🏛️ Autonomous On-Chain Governance (DAO)

CetinDB operates as a true decentralized organism, governed exclusively by its participants through trustless smart-contract logic.

*   **CIP (CetinDB Improvement Proposals):** Any stakeholder can draft and deploy network upgrades natively on-chain.
*   **Capital-Weighted Voting:** Influence is mathematically bonded to the participant's `CetinDB` holdings, ensuring aligned economic incentives.
*   **Immutable Execution:** Protocol parameter adjustments are enforced by the mesh asynchronously, requiring zero manual intervention from a centralized authority.

---

## 🚀 Technical Implementation & Quick Start

The repository encompasses the entire stack—frontend dashboards, cryptographic engines, peer-to-peer routing, and data storage logic.

### System Requirements
*   **Node.js**: `v18.x` or higher (LTS recommended)
*   **Package Manager**: `npm` (or `yarn` / `pnpm`)

### Developer Initialization

1. **Clone the Core Repository**
   ```bash
   git clone https://github.com/meforcetechnology/cetindb-network.git
   cd cetindb-network
   ```

2. **Install Core Dependencies**
   ```bash
   npm install
   ```

3. **Launch Local Mesh Instance**
   ```bash
   npm run dev
   ```

### Enterprise Node Deployment (Desktop/Server)
For high-capacity operations requiring LevelDB and OS-level resources:
```bash
# Build the production frontend bundle
npm run build

# Initialize the Desktop Node engine
cd electron
npm install
npm start
```

---

## 🛠️ Repository Architecture

Our monorepo is meticulously structured for maintainability and scalability:

*   **`src/`**: The reactive UI interface, WebRTC lifecycle managers, cryptographic modules, and the DAG engine.
*   **`cetindb-core-sdk/`**: The formalized, highly portable TypeScript SDK (`@meforcetechnology/cetindb-core`) for third-party integrations.
*   **`electron/`**: The native host shell, bridging Node.js APIs (`fs`, `level`) with the user interface.
*   **`src/store/`**: Global state management architecture utilizing `zustand` for deterministic, predictable UI rendering.

---

## 🌍 Network Topologies

The CetinDB Core supports hot-swapping between distinct environments via the `network.json` configuration file, ensuring strict data isolation.

*   **Environment 1**: `TESTNET` (`cetindb_testnet_01`) - An ephemeral ecosystem for developing integrations, exploring DAO models, and vetting protocol iterations securely.
*   **Environment 2**: `MAINNET` (`cetindb_v2_mainnet`) - The immutable, production-grade decentralized ledger. 


---

<div align="center">
  <p>Engineered for the decentralized future by <b>MeForce Technology</b>.</p>
  <p><i>Transforming the browser into the backbone of Web3.</i></p>
</div>
