import styled from '@emotion/styled';
import Link from 'next/link';

import { mediaBreakUps } from 'assets/styles/breakpoints';
import theme from 'assets/styles/theme';
import { color, spacing } from 'constants/theme';

const Header = styled.header({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  padding: theme.spacing[16],
  opacity: 0,
  top: '-100%',
  background: theme.color.white,
  transitionProperty: 'top, opacity',
  transitionDuration: '.3s',
  zIndex: theme.zIndex.header,
  msTransitionTimingFunction: 'ease-in-out',
  justifyContent: 'flex-start',
  gap: theme.spacing[16],
  alignItems: 'center',
  '&.open': {
    opacity: 1,
    top: 0,
    background: color.white,
  },
  [mediaBreakUps.md]: {
    width: 'inherit',
    gap: 0,
    justifyContent: 'space-between',
  },
});

const ToggleButton = styled.button({
  border: `1px solid ${color.gray100}`,
  backgroundColor: color.white,
  borderRadius: 4,
  cursor: 'pointer',
  display: 'inline-block',
  padding: `${spacing[4]}px ${spacing[8]}px`,

  ':not(:first-of-type)': {
    marginLeft: -1,
    borderLeftColor: 'transparent',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  ':not(:last-of-type)': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  ':hover': {
    backgroundColor: color.gray100,
  },

  '&.active': {
    backgroundColor: color.gray200,
  },

  [mediaBreakUps.md]: {
    padding: `${spacing[4]}px ${spacing[8]}px`,
  },
});

const Styled = {
  Header,
  ToggleWrapper: styled.div({
    display: 'inline-flex',
    overflow: 'hidden',
  }),
  ToggleButton: ToggleButton.withComponent(Link),
};
export default Styled;
