export const clsx = (classNames: string[]) => {
  const filtered = classNames.filter((value) => !!value);
  return filtered.length ? filtered.join(' ') : undefined;
};

export const get2Word = (num: number) => String(num).padStart(2, '0');

export const getDate = (date: Date) => {
  const year = date.getFullYear();
  const month = get2Word(date.getMonth() + 1);
  const day = get2Word(date.getDate());
  return { year, month, day };
};
