import styled from '@emotion/styled';

import { mediaBreakUps } from 'assets/styles/breakpoints';

const Header = styled.header(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  padding: 16,
  opacity: 0,
  top: -56,
  background: '#ffffff',
  transitionProperty: 'top, opacity',
  transitionDuration: '.3s',
  zIndex: theme.zIndex.header,
  msTransitionTimingFunction: 'ease-in-out',
  '&.open': {
    opacity: 1,
    top: 0,
    background: '#ffffffCC',
  },
  [mediaBreakUps.md]: {
    width: 'inherit',
  },
}));

const Styled = {
  Header,
};
export default Styled;
