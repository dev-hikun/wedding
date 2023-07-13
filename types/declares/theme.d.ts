import { Theme as ThemeType } from 'assets/styles/theme';
import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
