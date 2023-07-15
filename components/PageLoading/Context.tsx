import { createContext, memo, type Dispatch, type SetStateAction } from 'react';

interface LoadingContextProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<LoadingContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLoading: () => {},
});

const Provider = ({ setIsLoading, children }) => (
  <Context.Provider value={{ setIsLoading }}>{children}</Context.Provider>
);

const LoadingContext = {
  Provider: memo(Provider),
};
export default LoadingContext;
