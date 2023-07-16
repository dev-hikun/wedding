import styled from '@emotion/styled';
import Image from 'next/image';

import line from 'assets/images/line.png';

const Line = () => (
  <Styled.LineWrapper>
    <Image fill sizes="100%" src={line} alt="line" />
  </Styled.LineWrapper>
);
export default Line;

const Styled = {
  LineWrapper: styled.div({
    alignSelf: 'stretch',
    position: 'relative',
    '::after': {
      content: '""',
      display: 'block',
      marginBottom: `${550 / 179}%`,
    },
  }),
};
