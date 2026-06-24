import { useState } from "react";
import { requestAccess } from "@stellar/freighter-api";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    try {
      const publicKey = await requestAccess();

      if (publicKey) {
        setWalletAddress(publicKey);
        alert("✅ Wallet Connected Successfully");
      }
    } catch (error) {
      alert("❌ Connection Failed");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>🚀 Stellar Wallet App</h1>

      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      {walletAddress && (
        <>
          <h2>Connected Wallet:</h2>
          <p>{walletAddress}</p>
        </>
      )}
    </div>
  );
}

export default App;
