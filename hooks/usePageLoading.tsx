import { useCallback, useContext } from 'react';

import { Context } from 'components/PageLoading/Context';

const usePageLoading = () => {
  const { setIsLoading } = useContext(Context);

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
