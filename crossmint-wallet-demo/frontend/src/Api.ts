

export async function createWallet(body: { email: string }) {
  const res = await fetch("/api/create-wallet", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function sendTx(body: { from: string; to: string; amount: string; token: string; chain: string }) {
  const res = await fetch("/api/send-tx", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// export async function createWallet(body: { email: string }) {
//   const url = 'https://staging.crossmint.com/api/2025-06-09/wallets';
// const res = {
//   method: 'POST',
//   headers: {
//     'X-API-KEY': 'API_KEY',
//     'x-idempotency-key': 'idempotency_key',
//     'Content-Type': 'application/json'
//   },
//   body: '{"type":"smart","chainType":"solana","config":{"adminSigner":{"type":"external-wallet","address":"example@gmail.com"}},"owner":"owner"}'
// };

// try {
//   const response = await fetch(url, res);
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
// }

// export async function sendTx(body: { from: string; to: string; amount: string; token: string; chain: string }) {
//   const url = 'https://staging.crossmint.com/api/2025-06-09/wallets/walletLocator/transactions';
// const res = {
//   method: 'POST',
//   headers: {
//     'X-API-KEY': 'API_KEY',
//     'x-idempotency-key': 'idempotency_key',
//     'Content-Type': 'application/json'
//   },
//   body: '{"params":{"transaction":"txExample","signer":"signerTx"}}'
// };

// try {
//   const response = await fetch(url, res);
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
// }