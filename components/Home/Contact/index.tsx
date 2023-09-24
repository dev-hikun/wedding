import { useTranslation } from 'next-i18next';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/Gallery/Styled';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Styled.Panel>
      <Typography variant="pageTitle" align="center">
        {t('마음 전하실 곳')}
      </Typography>
    </Styled.Panel>
  );
};

export default Contact;
