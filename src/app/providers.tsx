'use client';

import { useState, type ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/components/wagmiConfig';

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// import { http, createConfig } from 'wagmi';
// import { mainnet, sepolia } from 'wagmi/chains';
// import {
//   coinbaseWallet,
//   injected,
//   metaMask,
//   walletConnect,
// } from 'wagmi/connectors';

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   connectors: [
//     // injected(),
//     metaMask(),
//     // coinbaseWallet({ appName: 'Create Wagmi' }),
//     // walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
//   ],
//   ssr: true,
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// });

// declare module 'wagmi' {
//   interface Register {
//     config: typeof config;
//   }
// }

// 'use client';

// import * as React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { http, createConfig, WagmiProvider, useAccount } from 'wagmi';
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';
// import { mainnet, sepolia, hardhat } from 'wagmi/chains';

// import { Account } from '@/components/Account';
// import { WalletOptions } from '@/components/WalletOptions';

// const queryClient = new QueryClient();
// // const projectId = 'YOUR_PROJECT_ID';
// const wagmiConfig = createConfig({
//   chains: [mainnet, sepolia, hardhat],
//   connectors: [metaMask()],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//     [hardhat.id]: http(),
//   },
// });

// function ConnectWallet(): JSX.Element {
//   const { isConnected } = useAccount();
//   console.log(isConnected);
//   if (isConnected) return <Account />;
//   return <WalletOptions />;
// }

// export function Providers({ children }: { children: React.ReactNode }) {
//   // const [mounted, setMounted] = React.useState(false);
//   // React.useEffect(() => setMounted(true), []);
//   return (
//     <WagmiProvider config={wagmiConfig}>
//       <QueryClientProvider client={queryClient}>
//         <ConnectWallet />
//         {children}
//         {/* appInfo={demoAppInfo} */}
//         {/* <RainbowKitProvider chains={chains}> */}
//         {/* {mounted && children} */}
//         {/* children */}
//         {/* </RainbowKitProvider> */}
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }
