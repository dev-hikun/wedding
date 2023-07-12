import { useEffect, useState } from 'react';

const initialState = { x: 0, y: 0 };
const useWindowScroll = () => {
  const [position, setPosition] = useState(() => initialState);

  useEffect(() => {
    const onScroll = () => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    if (typeof window !== 'undefined') {
      onScroll();
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return position;
};

export default useWindowScroll;
