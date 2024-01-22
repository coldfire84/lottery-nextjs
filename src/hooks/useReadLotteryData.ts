import { useBalance, useReadContracts } from 'wagmi';
import { abi } from '@/constants/abi';

interface ReadLotteryHookReturn {
  entranceFee: string | null;
  numPlayers: number | null;
  contractBalance: bigint | null;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

/**
 * @description Fetch data from the given Lottery contract abi/ address.
 */
export const useReadLotteryData = (
  contractAddress: string,
): ReadLotteryHookReturn => {
  const contractConfig = {
    abi,
    address: contractAddress as '0x{string}',
  } as const;

  const {
    data,
    isError: isErrorReadData,
    isLoading: isLoadingReadData,
    error: errorReadData,
    refetch: refetchData,
  } = useReadContracts({
    contracts: [
      {
        ...contractConfig,
        functionName: 'getEntranceFee',
      },
      {
        ...contractConfig,
        functionName: 'getNumPlayers',
      },
    ],
  });
  const [entranceFee, numPlayers] = data || [null, null];

  const {
    data: contractBalance,
    isLoading: isLoadingBalance,
    isError: isErrorBalance,
    error: errorBalance,
    refetch: refetchBalance,
  } = useBalance({
    address: contractAddress as '0x{string}',
  });

  const isLoading = isLoadingReadData || isLoadingBalance;
  const isError = isErrorReadData || isErrorBalance;

  const refetch = () => {
    refetchData();
    refetchBalance();
  };

  return {
    entranceFee: entranceFee ? (entranceFee.result as string) : null,
    numPlayers: numPlayers ? (numPlayers.result as number) : null,
    contractBalance: contractBalance ? contractBalance.value : null,
    isLoading,
    isError,
    refetch,
  };
};

// const {
//   data: entranceFee,
//   isLoading: isLoadingEntranceFee,
//   isError: isErrorEntranceFee,
//   error: errorEntranceFee,
// } = useReadContract({
//   abi,
//   address: contractAddress as '0x{string}',
//   functionName: 'getEntranceFee',
//   args: [],
// });

// const {
//   data: numPlayers,
//   isLoading: isLoadingNumPlayers,
//   isError: isErrorNumPlayers,
//   error: errorNumPlayers,
// } = useReadContract({
//   abi,
//   address: contractAddress as '0x{string}',
//   functionName: 'getNumPlayers',
//   args: [],
// });
