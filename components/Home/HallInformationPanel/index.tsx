import Image from 'next/image';

import Button from 'components/common/Button/Button';
import Typography from 'components/common/Typography';
import Styled from 'components/Home/HallInformationPanel/Styled';
import NaverMap from 'components/NaverMap';
import Line from 'components/Panel/Line';
import { spacing } from 'constants/theme';

import googleMap from 'assets/images/google-map.png';
import kakaoMap from 'assets/images/kakao-map.png';
import naverMap from 'assets/images/naver-map.png';
import tMap from 'assets/images/t-map.png';

const HallInformation = () => {
  return (
    <Styled.Panel>
      <Typography variant="pageTitle" align="center">
        웨딩홀 안내
      </Typography>
      <NaverMap />

      <div>
        <Typography variant="title20" align="center">
          라온제나 분당
        </Typography>
        <Typography variant="body1" align="center">
          경기도 성남시 분당구 성남대로 916번길 5, 관보빌딩 8층
        </Typography>
      </div>
      <Styled.MapWrapper>
        <Styled.MapButton size="map" href="https://goo.gl/maps/EhGid9xnvWMEyooaA" title="Google Map" target="_blank">
          <Image src={googleMap} width={48} height={48} alt="Google Map" />
        </Styled.MapButton>
        <Styled.MapButton size="map" href="https://naver.me/GOuTgIo4" title="Naver Map" target="_blank">
          <Image src={naverMap} width={48} height={48} alt="Naver Map" />
        </Styled.MapButton>
        <Styled.MapButton size="map" href="http://kko.to/iSl2cx_lMC" title="Google Map" target="_blank">
          <Image src={kakaoMap} width={48} height={48} alt="Kakao Map" />
        </Styled.MapButton>
        <Styled.MapButton size="map" href="https://surl.tmobiapi.com/7a14c6d0" title="Google Map" target="_blank">
          <Image src={tMap} width={48} height={48} alt="t Map" />
        </Styled.MapButton>
      </Styled.MapWrapper>
      <Line />
      <Styled.TransportationContainer>
        <div>
          <Typography variant="title18">지하철</Typography>
          <Typography variant="body1">수인분당선 야탑역 2번출구</Typography>
        </div>
        <div>
          <Typography variant="title18">버스</Typography>
          <Typography variant="body1">야탑역 정류장 하차</Typography>
          <Typography variant="caption" align="justify">
            5, 15-1, 17, 17-1, 51, 55, 57, 77-1, 116-3, 200, 222, 950, 52, 55-1, 60, 103, 119, 220, 250, 252, 300,
            340,340-1, 330, 350, 380, 1005, 3330, 4000, 8109, 9300, 9408, 9403, 9607, 5100, 5300
          </Typography>
        </div>
        <div>
          <Typography variant="title18">공항버스</Typography>

          <Typography variant="body1">아래 버튼을 클릭하시면 더 자세히 보실 수 있습니다.</Typography>
          <div css={{ padding: spacing[4] }}>
            <Button>인천공항 1터미널</Button> <Button>인천공항 2터미널</Button>
          </div>
        </div>
        <div>
          <Typography variant="title18">대절버스</Typography>
          <Typography variant="body1">신랑에게 연락주세요</Typography>
        </div>
      </Styled.TransportationContainer>
    </Styled.Panel>
  );
};

export default HallInformation;
