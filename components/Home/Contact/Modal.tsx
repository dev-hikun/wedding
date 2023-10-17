import { type FC, type PropsWithChildren } from 'react';

import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/common/Button';
import Typography from 'components/common/Typography';
import Styled from 'components/Home/GuestBook/Styled';
import { color, spacing } from 'constants/theme';

interface WriteModalProps {
  onClose: VoidFunction;
}
const Modal: FC<PropsWithChildren<WriteModalProps>> = ({ onClose, children }) => {
  const { t } = useTranslation();

  return (
    <Styled.Background onClick={onClose}>
      <Styled.Paper tabIndex={-1} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div css={titleCss}>
          <Typography variant="pageTitle" align="center">
            연락처
          </Typography>
          <Button type="button" size="xs" onClick={onClose}>
            <Typography variant="caption" align="right">
              {t('닫기')}
            </Typography>
          </Button>
        </div>
        {children}
      </Styled.Paper>
    </Styled.Background>
  );
};
const titleCss = css`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid ${color.gray100};
  margin-bottom: ${spacing[20]}px;
  line-height: 1.5;
`;

export default Modal;
