export const clsx = (classNames: string[]) => {
  const filtered = classNames.filter((value) => !!value);
  return filtered.length ? filtered.join(' ') : undefined;
};
