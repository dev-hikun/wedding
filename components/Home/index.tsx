import Styled from 'components/Home/Styled';
import Panel from 'components/Panel';

const Home = () => {
  return (
    <Styled.Container>
      <Panel></Panel>
      <Panel>두번째 패널</Panel>
    </Styled.Container>
  );
};
export default Home;
