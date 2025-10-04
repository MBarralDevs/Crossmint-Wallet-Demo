require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createWalletServer, sendTxServer } = require("./crossmintClient");

const PORT = process.env.PORT || 4000;
const FRONTEND = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

const app = express();
app.use(cors({ origin: FRONTEND }));
app.use(express.json());

// Create wallet endpoint
app.post("/api/create-wallet", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).send("email required");
    // call crossmint client helper
    const wallet = await createWalletServer({ email });
    res.json(wallet);
  } catch (err) {
    console.error(err);
    res.status(500).send(String(err.message || err));
  }
});

// Send transaction endpoint
app.post("/api/send-tx", async (req, res) => {
  try {
    const { from, to, amount, token, chain } = req.body;
    if (!from || !to || !amount) return res.status(400).send("missing params");
    const result = await sendTxServer({ from, to, amount, token, chain });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(String(err.message || err));
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on ${PORT}`);
});
