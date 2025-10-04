import React, { useState } from "react";
import { createWallet, sendTx } from "./Api";

export default function App() {
  const [email, setEmail] = useState("alice@example.com");
  const [walletAddr, setWalletAddr] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("1");

  const pushLog = (m: string) => setLog(l => [m, ...l]);

  const handleCreate = async () => {
    pushLog("Creating wallet...");
    try {
      const res = await createWallet({ email });
      setWalletAddr(res.address);
      pushLog(`Wallet created: ${res.address}`);
    } catch (e: any) {
      pushLog(`Create error: ${e?.message || JSON.stringify(e)}`);
    }
  };

  const handleSend = async () => {
    if (!walletAddr) {
      pushLog("Create a wallet first.");
      return;
    }
    pushLog("Sending transaction...");
    try {
      const res = await sendTx({
        from: walletAddr,
        to,
        amount,
        token: "USDC",
        chain: "solana"
      });
      pushLog(`Tx submitted: ${res.txHash || "no-tx-hash-returned"}`);
    } catch (e: any) {
      pushLog(`Send error: ${e?.message || JSON.stringify(e)}`);
    }
  };

  return (
    <div className="container">
      <h1>Crossmint Wallet Demo</h1>

      <section>
        <h2>Create wallet</h2>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleCreate}>Create Wallet</button>
        <div>Address: <code>{walletAddr}</code></div>
      </section>

      <section>
        <h2>Send token</h2>
        <div>
          <label>To</label>
          <input value={to} onChange={e => setTo(e.target.value)} placeholder="0x..." />
        </div>
        <div>
          <label>Amount</label>
          <input value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button onClick={handleSend}>Send</button>
      </section>

      <section>
        <h2>Logs</h2>
        <div className="logs">
          {log.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </section>
    </div>
  );
}