import styled from '@emotion/styled';

import { mediaBreakUps } from 'assets/styles/breakpoints';
import { HideScrollbarStyle } from 'assets/styles/mixins';
import AppHeader from 'components/AppHeader';
import type { FCLayout } from 'types/common';

const Layout: FCLayout = ({ children }) => (
  <Styled.Container>
    <AppHeader />
    <main>{children}</main>
  </Styled.Container>
);
export default Layout;

const Styled = {
  Container: styled.div(HideScrollbarStyle, {
    [mediaBreakUps.md]: {
      '--w': `${10 / 0.195}vh`,
      maxWidth: 'calc(var(--w), 360px)',
      width: 'var(--w)',
      minWidth: 360,
      position: 'relative',
      margin: '0 auto',
    },
  }),
};
