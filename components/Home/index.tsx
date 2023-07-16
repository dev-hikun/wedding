import HallInformation from 'components/Home/HallInformationPanel';
import IntroPanel from 'components/Home/IntroPanel';
import MessagePanel from 'components/Home/MessagePanel';
import Styled from 'components/Home/Styled';

const Home = () => {
  return (
    <Styled.Container>
      <IntroPanel />
      <MessagePanel />
      <HallInformation />
    </Styled.Container>
  );
};
export default Home;
