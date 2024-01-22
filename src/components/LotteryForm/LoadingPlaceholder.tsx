import { LoadingSpinnerLarge } from '../LoadingSpinnerLarge';

const LoadingPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <LoadingSpinnerLarge />
      <p className="mt-2">Loading...</p>
    </div>
  );
};

export default LoadingPlaceholder;
