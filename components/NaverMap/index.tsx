import { useRef } from 'react';

import styled from '@emotion/styled';
import NextScript from 'next/script';

import { FONT_CSS_VAR } from 'assets/fonts/notoSerif';
import { color, spacing } from 'constants/theme';
import usePageLoading from 'hooks/usePageLoading';

const NaverMap = () => {
  const map = useRef<HTMLDivElement | null>(null);
  const toggle = usePageLoading();
  const handleScriptLoad = async () => {
    if (!map.current) {
      toggle(true);
      const interval = await new Promise<NodeJS.Timer>((resolve) => {
        const currentCheck = setInterval(() => !!map.current && resolve(currentCheck), 200);
      });
      clearInterval(interval);
      toggle(false);
    }

    const position = new naver.maps.LatLng(37.4115009, 127.1297925);
    const naverMap = new naver.maps.Map(map.current, {
      center: position,
      zoom: 16,
      minZoom: 10,
      zoomControl: true,

      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
      },
    });

    const marker = new naver.maps.Marker({
      position,
      map: naverMap,
      title: '관보빌딩 8층 라온제나 분당',
    });

    const infoWindow = new naver.maps.InfoWindow({
      content:
        '<div class="marker-text"><b>라온제나 분당</b><p>경기도 성남시 분당구 성남대로916번길 5</p><p>(관보빌딩 8층)</p></div>',
      borderColor: color.gray,
      anchorSize: new naver.maps.Size(10, 10),
    });
    infoWindow.open(naverMap, marker);
  };
  return (
    <>
      <Styled.MapWrapper ref={map} />
      <NextScript
        id="naver-map"
        // rewrite를 통해 가려줄까도 했는데, 어차피 콘솔에서 URL 안맞으면 호출불가
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
};

export default NaverMap;

const Styled = {
  MapWrapper: styled.div(({ theme }) => ({
    width: `calc(100% - ${spacing[40]}px)`,
    position: 'relative',
    margin: `0 ${spacing[20]}px`,
    background: color.gray,
    '::before': {
      content: '""',
      paddingBottom: '100%',
      display: 'block',
      position: 'relative',
    },

    '.marker-text': {
      padding: spacing[8],
      fontFamily: FONT_CSS_VAR[theme.locale],
      color: color.text,
      b: { fontSize: 16 },
      p: { fontSize: 14, '+p': { fontSize: 12 } },
    },
  })),
};
