"use client"

import { ConnectButton, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit'

export default function WalletConnect() {
  const account = useCurrentAccount();
  const disconnect = useDisconnectWallet();

  return (
    <div className="flex items-center gap-2">
      <ConnectButton />
      {account && (
        <>
          <span className="ml-2 px-2 py-1 rounded bg-green-900/60 text-green-300 text-xs font-mono truncate max-w-[120px]" title={account.address}>
            {account.address.slice(0, 6)}...{account.address.slice(-4)}
          </span>
          <button
            onClick={() => disconnect.mutate()}
            className="ml-1 px-2 py-1 rounded bg-gray-800 text-gray-300 text-xs hover:bg-red-500 hover:text-white transition"
            title="Disconnect Wallet"
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  );
} 