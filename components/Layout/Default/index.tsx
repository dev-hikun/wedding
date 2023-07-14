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
      maxWidth: `max(${9 / 0.195}vh, 360px)`,
      position: 'relative',
      margin: '0 auto',
    },
  }),
};
