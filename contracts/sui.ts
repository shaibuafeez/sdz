import { Transaction } from '@mysten/sui/transactions';
import { SuiClient } from '@mysten/sui/client';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { fromB64 } from '@mysten/sui/utils';

// Example function to sign a transaction
export async function signTransaction(txb: Transaction, keypair: Ed25519Keypair) {
  const serializedTx = await txb.serialize();
  const txBytes = fromB64(serializedTx);
  const signature = await keypair.signTransaction(txBytes);
  return signature;
}

// Example function to execute a transaction
export async function executeTransaction(txb: Transaction, keypair: Ed25519Keypair) {
  const client = new SuiClient({ url: 'https://fullnode.mainnet.sui.io' });
  const signature = await signTransaction(txb, keypair);
  const result = await client.executeTransactionBlock({
    transactionBlock: await txb.serialize(),
    signature: signature.toString(),
    options: {
      showEffects: true,
      showEvents: true,
    },
  });
  return result;
} 