'use client';
// import { Metadata } from 'next';
import { useConfig, useAccount } from 'wagmi';
// Should we do this in layout.tsx vs page.tsx?
import { NavBar } from '@/components/NavBar/NavBar';
import UnsupportedChain from '@/components/UnsupportedChain';
import LotteryForm from '@/components/LotteryForm/LotteryForm';
import contractsRaw from '@/constants/contract-deployments.json';
import ConnectToNetwork from '@/components/ConnectToNetwork';
/**
 * @description Contract deployment map
 */
interface ContractDeployments {
  [key: number]: {
    address: string;
  };
}
/**
 * @description Get contract address by chainId
 */
function getContractAddress(chainId?: number): string | undefined {
  if (!chainId) return undefined;
  const contracts = contractsRaw as ContractDeployments;
  const contract = contracts[chainId];
  return contract?.address;
}
// Export metadata as a named export for SEO API
// --> see: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#modifying-head
// export const metadata: Metadata = {
//   title: 'Home',
// };
export default function Page() {
  const { chains } = useConfig();
  const { isConnected, chainId } = useAccount();

  const isChainSupported = chains.find(
    (chain) => isConnected && chain.id === chainId,
  );
  const contractAddress = getContractAddress(chainId);
  const supportedChains = chains.map((chain) => chain.name.toString());

  return (
    <>
      <NavBar isConnected={isConnected} />
      {!isConnected ? (
        <ConnectToNetwork supportedChains={supportedChains} />
      ) : (
        <div>
          {chainId && isChainSupported && contractAddress ? (
            <LotteryForm contractAddress={contractAddress} />
          ) : (
            <UnsupportedChain supportedChains={supportedChains} />
          )}
        </div>
      )}
    </>
  );
}
