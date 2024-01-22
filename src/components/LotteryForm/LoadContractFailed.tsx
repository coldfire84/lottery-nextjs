import { FC } from 'react';

const LoadContractFailed: FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight">
          Lottery Unavailble
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
            Failed to connect to Lottery. Please refresh the page and try again.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoadContractFailed;
