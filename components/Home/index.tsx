import IntroPanel from 'components/Home/IntroPanel';
import Styled from 'components/Home/Styled';
import Panel from 'components/Panel';

const Home = () => {
  return (
    <Styled.Container>
      <IntroPanel />
      <Panel>두번째 패널</Panel>
      <Panel>세번째 패널</Panel>
    </Styled.Container>
  );
};
export default Home;
