# 🚀 Multi Wallet Payment Tracker (Level 2)

## 📌 Project Description
Multi Wallet Payment Tracker is a Stellar blockchain web application built using React, Vite, JavaScript, and Stellar SDK.

This project allows users to create and manage multiple Stellar wallets in one interface. Users can switch between wallets, check balances, send XLM payments, and view transaction status in real time.

The project demonstrates advanced blockchain concepts such as multi-wallet management, account switching, secure payment signing, blockchain API integration, and error handling.

---

## ✨ Features

- Create multiple wallets
- Store multiple wallet accounts in UI
- Switch between wallets
- Check real-time balance
- Send XLM tokens
- Transaction success / failed status
- Input validation
- Error handling

---

## 👛 Multi-Wallet Implementation

This application supports multiple wallets.

### How it works:
- Click **Create Wallet** to generate a new wallet
- Each wallet is added to wallet list
- Select any wallet to make it active
- Active wallet can check balance
- Active wallet can send XLM
- Easily switch between wallets anytime

This improves usability by allowing one user to manage multiple Stellar accounts in one app.

---

## 🌐 Deployed Contract / Blockchain Details

This project uses Stellar Testnet blockchain.

- Network: Stellar Testnet
- API: Horizon Server
- URL: https://horizon-testnet.stellar.org
- Funding Tool: Friendbot
- Transaction Type: Native XLM Payment

### Contract Reference
This project uses Stellar native blockchain payment operations instead of a custom smart contract.

### Deployed Contract Address
Stellar Testnet Payment Operation via Active Wallet Public Address

### Example Transaction Hash
PASTE_YOUR_SUCCESSFUL_HASH_HERE

---

## 🛠️ Technologies Used

- React.js
- JavaScript
- Vite
- Node.js
- Stellar SDK

---

## ⚙️ Setup Instructions

### Clone Repository
```bash
git clone https://github.com/Payalmodhale/Stellar_second_task2
```
## Smart Contract Information

### Contract File
contracts/contract.rs

### Contract Address
GBBISKEADAQQNHNDJSIO3KD2LJNLNZ2NPA6KYVQRKIL7TNZL4ZUWSER3

### Stellar Explorer Link
https://stellar.expert/explorer/testnet/account/GBBISKEADAQQNHNDJSIO3KD2LJNLNZ2NPA6KYVQRKIL7TNZL4ZUWSER3

### Description
This project includes a simple Soroban smart contract stored in the contracts folder and integrated with the Multi Wallet Payment Tracker application.

## Wallet Integration

This project uses Freighter Wallet for Stellar wallet connectivity.

Users can:
- Connect Freighter Wallet
- Retrieve wallet address
- Interact with Stellar Testnet
