'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useWriteContract } from 'wagmi';
import { abi } from '@/constants/abi';
import { toast } from 'react-hot-toast';
import { useReadLotteryData } from '../../hooks/useReadLotteryData';
import { LoadingSpinnerSmall } from '../LoadingSpinnerSmall';
import LoadingPlaceholder from './LoadingPlaceholder';
import { ContractDataCard } from './LotteryDataCard';
import LoadContractFailed from './LoadContractFailed';
import withMainContainer from '../withMainContainer';
/**
 * @description Component Props
 */
interface LotteryFormComponentProps {
  contractAddress: string;
}
/**
 * @description React Hook Form Inputs
 */
type FormInputs = {
  example: string;
  exampleRequired: string;
};
/**
 * @description Lottery Form Component
 */
const LotteryForm: FC<LotteryFormComponentProps> = ({ contractAddress }) => {
  const {
    // register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<FormInputs>();
  const [submitting, setSubmitting] = useState(false);
  const { writeContractAsync } = useWriteContract();
  const { entranceFee, numPlayers, contractBalance, isLoading, refetch } =
    useReadLotteryData(contractAddress);

  const checkContractData = (): boolean => {
    let valid: boolean = true;
    if (entranceFee === null || entranceFee === undefined) valid = false;
    if (contractBalance === null || contractBalance === undefined)
      valid = false;
    // if (numPlayers === null || numPlayers === undefined) valid = false;
    if (!valid)
      console.log(
        'invalid contract data, entraceFee',
        entranceFee,
        'numPlayers (can be undefined)',
        numPlayers,
        'contractBalance',
        contractBalance,
      );
    return valid;
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // console.log('form data', data);
    setSubmitting(true);
    try {
      await writeContractAsync({
        abi,
        address: contractAddress as '0x{string}',
        functionName: 'enter',
        args: [],
        value: BigInt(entranceFee as string),
      });
      toast.success('Success!');
      refetch();
    } catch (err) {
      console.error(err);
      toast.error('Unable to enter. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) return <LoadingPlaceholder />;
  if (!checkContractData()) return <LoadContractFailed />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-light-text dark:text-dark-text">
          Enter
        </h1>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <ContractDataCard
        name="Weekly Lottery"
        entranceFee={entranceFee!}
        numPlayers={numPlayers ? numPlayers : 0}
        potentialWinnings={contractBalance!.toString()}
      />
      <button
        className="mt-4 btn btn-block text-white dark:border-gray-700 bg-light-primary dark:bg-dark-primary"
        type="submit"
        disabled={submitting}
      >
        {submitting && (
          <span>
            <LoadingSpinnerSmall />
          </span>
        )}
        Enter Lottery
      </button>
    </form>
  );
};

export default withMainContainer(LotteryForm);
