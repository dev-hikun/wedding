import styled from '@emotion/styled';
import Image from 'next/image';

import Typography from 'components/common/Typography';
import Panel from 'components/Panel';

const IntroPanel = () => {
  return (
    <Panel>
      <ImageWrapper>
        <Image
          fill
          priority
          sizes="100%"
          src="https://placehold.it/1200x900/1d4082?text=sample_image"
          alt="희현x스즈"
        />
        <TextWrapper>
          <Typography paragraph>우리,</Typography>
          <Typography>결혼</Typography>
          <Typography>합니다</Typography>
        </TextWrapper>
      </ImageWrapper>
      <LineBox />
    </Panel>
  );
};
export default IntroPanel;

const ImageWrapper = styled.div({
  height: 'calc(var(--vh, 1vh) * 100 - 264px)',
  backgroundColor: 'black',
  position: 'relative',
  zIndex: 0,
  img: {
    objectFit: 'cover',
  },
});

const TextWrapper = styled.div(({ theme }) => ({
  width: 200,
  height: 100,
  background: theme.color.white070,
  left: '50%',
  bottom: theme.spacing[20],
  transform: 'translate(-100px, 0)',
  position: 'absolute',
}));

const LineBox = styled.div({
  margin: 16,
  position: 'absolute',
  zIndex: 1,
  inset: 0,
  border: '1px solid #c5c5c5',
  width: 'calc(100% - 32px)',
  height: 'calc(var(--vh, 1vh) * 100 - 32px)',
  background: 'transparent',
});
