import React from 'react';
import { formatEther } from 'viem';

interface ContractDataCardProps {
  name: string;
  entranceFee: string;
  numPlayers: number;
  potentialWinnings: string;
}

export const ContractDataCard: React.FC<ContractDataCardProps> = ({
  name,
  entranceFee,
  numPlayers,
  potentialWinnings,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-light-text">
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      <div className="space-y-2">
        <div>
          <span className="font-medium">Entrance Fee:</span>
          <span className="ml-2">{formatEther(BigInt(entranceFee))}</span>
        </div>
        <div>
          <span className="font-medium">Number of Players:</span>
          <span className="ml-2">{numPlayers}</span>
        </div>
        <div>
          <span className="font-medium">Potential Winnings:</span>
          <span className="ml-2">{formatEther(BigInt(potentialWinnings))}</span>
        </div>
      </div>
    </div>
  );
};
