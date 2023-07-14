import { useCallback, useContext } from 'react';

import { LoadingContext } from 'components/PageLoading';

const usePageLoading = () => {
  const { setIsLoading } = useContext(LoadingContext);
  return useCallback(
    (isLoading: boolean) => {
      if (document) {
        document.body.classList[isLoading ? 'add' : 'remove']('loading');
      }
      setIsLoading(isLoading);
    },
    [setIsLoading]
  );
};
export default usePageLoading;
