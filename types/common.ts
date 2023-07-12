import type { FC, PropsWithChildren } from 'react';

import type { NextPage } from 'next';

export type Locale = { locale: 'ko' | 'jp' };

export type NextPageWithLayout<P extends Locale = Locale, IP = P> = NextPage<P, IP> & {
  Layout?: FCLayout<P>;
};

export type FCChildren<Props = object> = FC<PropsWithChildren<Props>>;
export type FCLayout<Props = { [key: string]: never }> = FC<PropsWithChildren<Locale & Props>>;
