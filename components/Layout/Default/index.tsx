import { variable } from 'assets/fonts';
import AppHeader from 'components/AppHeader';
import type { FCLayout } from 'types/common';

const Layout: FCLayout = ({ children, locale }) => (
  <div className={[variable[locale]].join(' ')}>
    <AppHeader />
    <main>{children}</main>
  </div>
);
export default Layout;
