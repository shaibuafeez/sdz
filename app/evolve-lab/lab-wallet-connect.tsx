"use client"

import { ConnectButton, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit'
import { Wallet, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

export default function LabWalletConnect() {
  const account = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();
  const [isPulsing, setIsPulsing] = useState(false);

  // Add pulsing effect every few seconds to draw attention
  useEffect(() => {
    if (!account) {
      const interval = setInterval(() => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 1000);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [account]);

  return (
    <div className="inline-block mt-2">
      {!account ? (
        <div className={`px-5 py-2 rounded-xl bg-green-400 text-black text-sm font-bold tracking-widest hover:bg-green-500 transition-all duration-300 flex items-center shadow-lg ${isPulsing ? 'shadow-green-400/60 scale-[1.03]' : 'shadow-green-400/25'} hover:shadow-green-400/40 hover:scale-[1.03] relative overflow-hidden animate-button-glow group`}>
          {isPulsing && (
            <span className="absolute inset-0 bg-white/20 animate-pulse-once"></span>
          )}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-text-shimmer"></span>
          <span className="flex items-center relative z-10">
            <Wallet className="w-4 h-4 mr-2 group-hover:animate-button-pulse" />
            <ConnectButton 
              className="!bg-transparent !p-0 !m-0 !border-0 !shadow-none !text-black !font-bold !hover:bg-transparent" 
              connectText="CONNECT WALLET"
            />
          </span>
        </div>
      ) : (
        <Button
          onClick={() => disconnect()}
          className="px-5 py-2 h-auto rounded-xl bg-green-400 text-black text-sm font-bold tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center shadow-lg shadow-green-400/25 hover:shadow-green-400/40 hover:scale-[1.03] relative overflow-hidden group"
          title={`Connected: ${account.address}`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-text-shimmer"></span>
          <span className="flex items-center relative z-10">
            <Wallet className="w-4 h-4 mr-2" />
            {account.address.slice(0, 6)}...{account.address.slice(-4)}
            <ChevronDown className="w-3 h-3 ml-1 opacity-70" />
          </span>
        </Button>
      )}
    </div>
  );
}
