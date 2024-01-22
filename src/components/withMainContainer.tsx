import React, { ComponentType } from 'react';
/**
 * HOC: a generic function: can accept any component with any props
 * */
const withMainContainer = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const WithMainContainer = (props: P) => {
    return (
      <div className="w-full max-w-lg mt-10 m-auto py-10 px-10 text-light-text dark:text-dark-text bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg shadow">
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithMainContainer;
};

export default withMainContainer;
