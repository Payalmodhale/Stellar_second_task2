import * as StellarSdk from "@stellar/stellar-sdk";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

export function newWallet() {
  const pair = StellarSdk.Keypair.random();
  return {
    id: Date.now(),
    publicKey: pair.publicKey(),
    secret: pair.secret()
  };
}

export async function fetchBalance(publicKey) {
  try {
    const acc = await server.loadAccount(publicKey);
    return acc.balances;
  } catch {
    return [];
  }
}

export async function pay(secret, destination, amount = "5") {
  const kp = StellarSdk.Keypair.fromSecret(secret);
  const acc = await server.loadAccount(kp.publicKey());

  const tx = new StellarSdk.TransactionBuilder(acc, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET
  })
    .addOperation(
      StellarSdk.Operation.payment({
        destination,
        asset: StellarSdk.Asset.native(),
        amount
      })
    )
    .setTimeout(30)
    .build();

  tx.sign(kp);
  return await server.submitTransaction(tx);
}
