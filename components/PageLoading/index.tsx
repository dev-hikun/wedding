import { useState } from 'react';

import dynamic from 'next/dynamic';

import LoadingContext from 'components/PageLoading/Context';
import type { FCChildren } from 'types/common';

const Loading = dynamic(() => import('./Loading'), { ssr: false });

const PageLoading: FCChildren = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingContext.Provider setIsLoading={setIsLoading}>{children}</LoadingContext.Provider>
      {isLoading && typeof document !== 'undefined' && <Loading />}
    </>
  );
};
export default PageLoading;
