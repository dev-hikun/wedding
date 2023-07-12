import '@emotion/react';
import { Locale } from 'types/common';

declare module '@emotion/react' {
  export interface Theme extends Locale {
    color: {
      text: string;
    };
    zIndex: {
      header: number;
    };
  }
}
