import styled from '@emotion/styled';

const Header = styled.header({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  padding: 16,
  opacity: 0,
  top: -56,
  background: '#ffffff',
  transitionProperty: 'top, opacity',
  transitionDuration: '.3s',
  msTransitionTimingFunction: 'ease-in-out',
  '&.open': {
    opacity: 1,
    top: 0,
    background: '#ffffffCC',
  },
});

const Styled = {
  Header,
};
export default Styled;
