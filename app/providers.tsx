'use client';


import React, { useMemo } from 'react';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { argentWallet, coinbaseWallet, imTokenWallet, injectedWallet, ledgerWallet, metaMaskWallet, omniWallet, rainbowWallet, trustWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';


import { ParticleNetwork } from '@particle-network/auth';
import { particleWallet } from '@particle-network/rainbowkit-ext';


import '@rainbow-me/rainbowkit/styles.css';


import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const Providers = ({ children }: { children: React.ReactNode }) => {

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const particle = useMemo(() => new ParticleNetwork({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
    appId: process.env.NEXT_PUBLIC_APP_ID as string,
    chainName: 'Ethereum',
    chainId: 1,
    wallet: { displayWalletEntry: true },
  }), []);

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon],
    [publicProvider()]
  );


  const commonOptions = { chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string };

  const popularWallets = useMemo(() => ({
    groupName: 'Popular',
    wallets: [
      particleWallet({ chains, authType: 'twitch' }),
      particleWallet({ chains, authType: 'discord' }),
      particleWallet({ chains, authType: 'google' }),
      particleWallet({ chains }),
      injectedWallet(commonOptions),
      rainbowWallet(commonOptions),
      coinbaseWallet({ appName: 'RainbowKit demo', ...commonOptions }),
      metaMaskWallet(commonOptions),
      walletConnectWallet(commonOptions),
    ],
  }), [particle]);


  const connectors = connectorsForWallets([
    popularWallets,
    {
      groupName: 'Other',
      wallets: [
        argentWallet(commonOptions),
        trustWallet(commonOptions),
        omniWallet(commonOptions),
        imTokenWallet(commonOptions),
        ledgerWallet(commonOptions),
      ],
    },
  ]);


  const wagmiClient = createConfig({
    autoConnect: false,
    connectors,
    publicClient,
    webSocketPublicClient,
  });


 


  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};


export default Providers;

