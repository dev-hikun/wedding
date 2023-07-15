import { useEffect } from 'react';

import HallInformation from 'components/Home/HallInformationPanel';
import IntroPanel from 'components/Home/IntroPanel';
import MessagePanel from 'components/Home/MessagePanel';
import Styled from 'components/Home/Styled';
import usePageLoading from 'hooks/usePageLoading';

const Home = () => {
  const toggle = usePageLoading();

  useEffect(() => {
    if (window) {
      toggle(true);
    }
  }, [toggle]);

  return (
    <Styled.Container>
      <IntroPanel />
      <MessagePanel />
      <HallInformation />
    </Styled.Container>
  );
};
export default Home;
