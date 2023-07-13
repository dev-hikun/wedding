import { useCallback, useContext, useMemo } from 'react';

import { LoadingContext } from 'components/PageLoading';

const usePageLoading = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const loading = useCallback((isLoading: boolean) => setIsLoading(() => isLoading), [setIsLoading]);
  return useMemo(() => loading, [loading]);
};
export default usePageLoading;
