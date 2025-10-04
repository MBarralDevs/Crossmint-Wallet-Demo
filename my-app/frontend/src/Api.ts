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