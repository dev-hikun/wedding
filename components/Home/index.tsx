import { useEffect } from 'react';

import IntroPanel from 'components/Home/IntroPanel';
import MessagePanel from 'components/Home/MessagePanel';
import Styled from 'components/Home/Styled';
import Panel from 'components/Panel';
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
      <Panel>세번째 패널</Panel>
    </Styled.Container>
  );
};
export default Home;
