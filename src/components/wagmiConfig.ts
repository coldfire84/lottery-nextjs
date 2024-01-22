import { http, createConfig } from 'wagmi';
import { hardhat, mainnet, sepolia } from 'wagmi/chains';
// import { injected, metaMask } from 'wagmi/connectors';
// import {
//   coinbaseWallet,
//   injected,
//   metaMask,
//   walletConnect,
// } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia, hardhat],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http(),
  },
  // connectors: [
  //   // injected(),
  //   // metaMask(),
  //   // coinbaseWallet({ appName: 'Create Wagmi' }),
  //   // walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  // ],
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
