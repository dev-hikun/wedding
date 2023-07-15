import Image from 'next/image';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/HallInformationPanel/Styled';
import NaverMap from 'components/NaverMap';

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
      <Styled.TransportationContainer>
        <div>
          <Typography variant="title20">라온제나 분당</Typography>
          <Typography variant="body1">경기도 성남시 분당구 성남대로 916번길 5</Typography>
        </div>
        <div>
          <Typography variant="title18">지하철</Typography>
          <Typography variant="body1">수인분당선 야탑역 2번출구</Typography>
        </div>
        <div>
          <Typography variant="title18">공항버스</Typography>
          <Typography variant="body1">인천 1터미널 / 인천 2터미널 / 김포공항</Typography>
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
