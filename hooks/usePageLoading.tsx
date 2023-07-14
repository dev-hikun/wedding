import { useContext, useMemo } from 'react';

import { LoadingContext } from 'components/PageLoading';

const usePageLoading = () => {
  const { setIsLoading } = useContext(LoadingContext);
  return useMemo(() => setIsLoading, [setIsLoading]);
};
export default usePageLoading;
