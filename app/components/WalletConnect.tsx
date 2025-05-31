"use client"

import { ConnectButton, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit'

export default function WalletConnect() {
  const account = useCurrentAccount();
  const disconnect = useDisconnectWallet();

  return (
    <div className="wallet-button-container">
      {!account ? (
        <ConnectButton />
      ) : (
        <button
          onClick={() => disconnect.mutate()}
          className="px-4 py-2 rounded-xl bg-green-400/20 text-green-400 border border-green-400/40 text-sm font-bold tracking-wide hover:bg-green-400/30 transition-colors truncate max-w-[180px]"
          title={`Connected: ${account.address}`}
        >
          {account.address.slice(0, 6)}...{account.address.slice(-4)}
        </button>
      )}
    </div>
  );
} 