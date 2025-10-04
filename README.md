# Crossmint Wallet Demo

Small demo app (React frontend + Node backend) showing:
- Create a Smart Wallet for a user
- Send a token transfer

This is a minimal example intended for the Crossmint CSE case study. The backend proxies server-side calls to Crossmint APIs so secrets (API keys) stay on the server.

> NOTE: Replace placeholder base URLs and request shapes in `backend/crossmintClient.js` with the exact endpoints & body format from Crossmint docs:
> - https://docs.crossmint.com/wallets/guides/create-wallet
> - https://docs.crossmint.com/wallets/guides/transfer-tokens
> - React quickstart: https://docs.crossmint.com/wallets/quickstarts/react

## Setup

1. Clone the repo:
```bash
git clone <your-repo-url>
cd crossmint-wallet-demo
```
2. Backend: 
```bash
cd backend
cp ../.env.example .env
# edit .env and add your CROSSMINT_API_KEY and CROSSMINT_PROJECT_ID
npm install
npm run dev   # or `npm start`
```
3. Frontend:
```
cd ../frontend
npm install
npm run dev
# open http://localhost:5173
```
