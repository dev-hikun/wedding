import AppHeader from 'components/AppHeader';
import type { FCLayout } from 'types/common';

const Layout: FCLayout = ({ children }) => (
  <>
    <AppHeader />
    <main>{children}</main>
  </>
);
export default Layout;
