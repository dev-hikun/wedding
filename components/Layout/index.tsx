import { variable } from 'assets/fonts';
import { FCLayout } from 'types/common';

const Layout: FCLayout = ({ children, locale }) => (
  <div className={[variable[locale]].join(' ')}>
    <header>여긴헤더</header>
    <main>{children}</main>
  </div>
);
export default Layout;
