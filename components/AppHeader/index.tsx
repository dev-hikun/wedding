import { type ComponentProps, type FC, useState } from 'react';

import LanguageToggle from 'components/AppHeader/LanguageToggle';
import Menu from 'components/AppHeader/Menu';
import Styled from 'components/AppHeader/Styled';
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
        <Typography variant="h1">희현 & 미스즈 결혼합니다 👰🏻‍♀️💍🤵🏻</Typography>
        <LanguageToggle />
      </Styled.Header>
    </>
  );
};

export default AppHeader;
