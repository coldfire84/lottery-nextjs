'use client';

import { FC } from 'react';
import { ProfileMenu } from './ProfileMenu';
import { WalletOptions } from './WalletOptions';
import { normalize } from 'viem/ens';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { DarkModeToggle } from './DarkModeToggle';

interface NavBarProps {
  isConnected: boolean;
}

export const NavBar: FC<NavBarProps> = ({ isConnected }) => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({
    name: normalize(ensName as string),
  });

  return (
    <div className="navbar bg-light-nav dark:bg-dark-nav text-light-nav-text dark:text-dark-nav-text">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl font-medium">DecentraLottery</p>
        <div className="flex items-center">
          <DarkModeToggle />
          {isConnected ? (
            <ProfileMenu
              address={address}
              avatarUrl={ensAvatar ? ensAvatar : undefined}
              disconnect={disconnect}
            />
          ) : (
            <WalletOptions />
          )}
        </div>
      </div>
    </div>
  );
};
