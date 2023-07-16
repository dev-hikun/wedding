import type { FC, PropsWithChildren } from 'react';

import type { NextPage } from 'next';

export type Locale = { locale: 'ko' | 'ja' };

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  Layout?: FCLayout<P>;
};

export type FCChildren<Props = object> = FC<PropsWithChildren<Props>>;
export type FCLayout<Props = object> = FC<PropsWithChildren<Props>>;
