/**
 * crossmintClient.js
 *
 * Helper functions that call Crossmint server-side APIs.
 *
 * NOTE:
 * - The exact Crossmint REST routes / request bodies may differ; replace the URL/path and request shape with what is in Crossmint docs:
 *   https://docs.crossmint.com/wallets/guides/create-wallet
 *   https://docs.crossmint.com/wallets/guides/transfer-tokens
 *
 * - This file shows the pattern: keep your API key on the server, proxy calls from the frontend.
 */

const axios = require("axios");

const API_KEY = process.env.CROSSMINT_API_KEY;
const PROJECT_ID = process.env.CROSSMINT_PROJECT_ID;
if (!API_KEY) {
  console.warn(
    "No CROSSMINT_API_KEY found in env; calls will fail until you add it."
  );
}

// Base URL — replace with the correct Crossmint base for staging/production per their docs
const BASE = "https://api.crossmint.com"; // <- check docs; this is a placeholder

async function createWalletServer({ email }) {
  // Replace with actual Crossmint API endpoint / payload from the docs
  // Example pseudo-request:
  const url = `${BASE}/v1/wallets`; // confirm path in docs
  const body = {
    projectId: PROJECT_ID,
    metadata: { email },
    // any other required fields per Crossmint docs
  };

  const r = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  // expecting r.data to include an address or wallet id
  return r.data;
}

async function sendTxServer({
  from,
  to,
  amount,
  token = "USDC",
  chain = "polygon",
}) {
  // Replace with actual Crossmint transfer endpoint and body
  const url = `${BASE}/v1/transactions`; // confirm path in docs
  const body = {
    projectId: PROJECT_ID,
    from,
    to,
    amount,
    token,
    chain,
  };

  const r = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  return r.data;
}

module.exports = { createWalletServer, sendTxServer };
