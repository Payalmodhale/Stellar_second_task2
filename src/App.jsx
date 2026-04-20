import { useState } from "react";
import { newWallet, fetchBalance, pay } from "./stellar";

export default function App() {
  const [wallets, setWallets] = useState([]);
  const [active, setActive] = useState(null);
  const [balance, setBalance] = useState([]);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("5");
  const [status, setStatus] = useState("");

  const create = () => {
    const wallet = newWallet();
    setWallets([...wallets, wallet]);
    setActive(wallet);
  };

  const loadBalance = async () => {
    if (!active) return alert("Select wallet");
    setBalance(await fetchBalance(active.publicKey));
  };

  const send = async () => {
    if (!to.trim()) return alert("Enter address");
    if (!to.startsWith("G")) return alert("Invalid address");
    if (!active) return alert("Select wallet");

    try {
      setStatus("Processing...");
      await pay(active.secret, to, amount);
      setStatus("Payment Success");
    } catch {
      setStatus("Payment Failed");
    }
  };

  return (
    <div className="app">
      <h1>💸 Multi Wallet Tracker</h1>

      <button onClick={create}>Create Wallet</button>

      <div className="wallets">
        {wallets.map((w, i) => (
          <button key={w.id} onClick={() => setActive(w)}>
            Wallet {i + 1}
          </button>
        ))}
      </div>

      {active && <p>{active.publicKey}</p>}

      <button onClick={loadBalance}>Check Balance</button>

      {balance.map((b, i) => (
        <p key={i}>{b.balance} XLM</p>
      ))}

      <input
        placeholder="Destination"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={send}>Send Payment</button>

      <h3>{status}</h3>
    </div>
  );
}
