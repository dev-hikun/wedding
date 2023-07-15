import Typography from 'components/common/Typography';
import Styled from 'components/Home/HallInformationPanel/Styled';
import NaverMap from 'components/NaverMap';

const HallInformation = () => {
  return (
    <Styled.Panel>
      <Typography variant="pageTitle" align="center">
        웨딩홀 안내
      </Typography>
      <NaverMap />
    </Styled.Panel>
  );
};

export default HallInformation;
