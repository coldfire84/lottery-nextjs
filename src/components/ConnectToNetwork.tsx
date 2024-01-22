import { FC } from 'react';
import withMainContainer from './withMainContainer';

interface ConnectToNetworkProps {
  supportedChains: string[];
}

const ConnectToNetwork: FC<ConnectToNetworkProps> = ({ supportedChains }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight">
          Connect Wallet
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex basis-1/3">
          <svg
            className="w-25 h-25 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
          </svg>
        </div>
        <div className="flex basis-2/3 align-center">
          <p className="text-base leading-normal">
            Connect wallet, using a supported network:{' '}
            {supportedChains.join(', ')}
          </p>
        </div>
      </div>
    </>
  );
};
/**
 * @description Wrap the ConnectToNetwork component with the withMainContainer HOC
 */
export default withMainContainer(ConnectToNetwork);
