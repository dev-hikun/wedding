export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const Breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as Readonly<Record<BreakpointKey, number>>;

export type MediaBreakDown<T extends BreakpointKey> = `@media (max-width: ${(typeof Breakpoint)[T]}px)`;
export type ImageSizesBreakDown<T extends BreakpointKey> = `(max-width: ${(typeof Breakpoint)[T]}px)`;
export const mediaBreakDown: (key: BreakpointKey) => MediaBreakDown<typeof key> = (key) =>
  `@media (max-width: ${Breakpoint[key] - 1}px)`;
export const imageSizesBreakDown: (key: BreakpointKey) => ImageSizesBreakDown<typeof key> = (key: BreakpointKey) =>
  `(max-width: ${Breakpoint[key] - 1}px)`;

export type MediaBreakUp<T extends BreakpointKey> = `@media (min-width: ${(typeof Breakpoint)[T]}px)`;
export type ImageSizesBreakUp<T extends BreakpointKey> = `(min-width: ${(typeof Breakpoint)[T]}px)`;

export type SizesBreakUp<T extends BreakpointKey> = `(max-width: ${(typeof Breakpoint)[T]}px)`;
export const mediaBreakUp: (key: BreakpointKey) => MediaBreakUp<typeof key> = (key: BreakpointKey) =>
  `@media (min-width: ${Breakpoint[key]}px)`;
export const imageSizesBreakUp: (key: BreakpointKey) => ImageSizesBreakUp<typeof key> = (key: BreakpointKey) =>
  `(min-width: ${Breakpoint[key]}px)`;

export const mediaBreakUps = (Object.keys(Breakpoint) as BreakpointKey[]).reduce(
  (obj, key) => ({
    ...obj,
    [key]: mediaBreakUp(key),
  }),
  {} as { [key in BreakpointKey]: MediaBreakDown<key> }
);
