import { type ComponentProps, type FC, useState } from 'react';

import Menu from 'components/AppHeader/Menu';
import Styled from 'components/AppHeader/Styled';
import IconButton from 'components/common/Button/IconButton';
import Typography from 'components/common/Typography';
import { clsx } from 'utils/common';

type AppHeaderProps = ComponentProps<'header'>;
const AppHeader: FC<AppHeaderProps> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = clsx([className, isOpen && 'open']);

  return (
    <>
      <Menu setIsOpen={setIsOpen} />
      <Styled.Header className={classes} {...props}>
        <Typography align="left">이희현 & 미스즈</Typography>
        <IconButton>🇰🇷</IconButton>
        <IconButton>🇯🇵</IconButton>
      </Styled.Header>
    </>
  );
};

export default AppHeader;
