import type { ComponentProps, FC } from 'react';

import Styled from 'components/AppHeader/Styled';
import IconButton from 'components/Button/IconButton';
import Typography from 'components/Typography';
import useWindowScroll from 'hooks/useWindowScroll';
import { clsx } from 'utils/common';

type AppHeaderProps = ComponentProps<'header'>;
const AppHeader: FC<AppHeaderProps> = ({ className, ...props }) => {
  const { y } = useWindowScroll();
  const classes = clsx([className, y > 0 && 'is-sticky']);

  return (
    <Styled.Header className={classes} {...props}>
      <Typography align="left">이희현 & 미스즈</Typography>
      <IconButton>🇰🇷</IconButton>
      <IconButton>🇯🇵</IconButton>
    </Styled.Header>
  );
};
export default AppHeader;
