import { useState, type FC, type FormEventHandler } from 'react';

import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/common/Button';
import Typography from 'components/common/Typography';
import Styled from 'components/Home/GuestBook/Styled';
import { color, spacing } from 'constants/theme';
import type { IMessage } from 'types/message';
import { clsx } from 'utils/common';

interface WriteModalProps {
  data: Partial<IMessage>;
  onClose: VoidFunction;
  onUpdate: () => Promise<void>;
}
const WriteModal: FC<WriteModalProps> = ({ data, onClose, onUpdate }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const isEdit = Object.keys(data).length !== 0;

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    if (e.target instanceof HTMLFormElement && e.target.checkValidity()) {
      const formData = new FormData(e.target);
      const postData = (['password', 'name', 'content'] as const).reduce(
        (acc, value) => ({
          ...acc,
          [value]: formData.get(value),
        }),
        {}
      ) as Partial<IMessage>;

      const { postGuestBook, modifyGuestbook } = await import('./firebasePlugin');
      if (isEdit) {
        await modifyGuestbook({
          ...data,
          ...postData,
        });
      } else {
        await postGuestBook(postData);
      }
      await onUpdate();
      onClose();
      setIsLoading(false);
    }
  };

  return (
    <>
      <Styled.Background onClick={onClose}>
        <Styled.Paper tabIndex={-1} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <div css={titleCss}>
            <Typography variant="pageTitle" align="center">
              {t('방명록')} {t('작성')}
            </Typography>
            <Button type="button" size="xs" onClick={onClose}>
              <Typography variant="caption" align="right">
                {t('닫기')}
              </Typography>
            </Button>
          </div>

          <Styled.Form name="guest-book" onSubmit={handleFormSubmit}>
            <Styled.Title htmlFor="name" variant="title14" align="left">
              {t('이름')}
            </Styled.Title>
            <Styled.Input required type="text" id="name" name="name" autoComplete="no" defaultValue={data.name || ''} />
            {!isEdit && (
              <>
                <Styled.Title htmlFor="password" variant="title14" align="left">
                  {t('비밀번호')}
                  <Typography variant="caption" as="span" css={{ marginLeft: `${spacing[12]}px` }}>
                    {t('글 수정,삭제만을 위해 사용되는 비밀번호')}
                  </Typography>
                </Styled.Title>
                <Styled.Input required id="password" name="password" type="password" autoComplete="no" />
              </>
            )}
            <Styled.Title htmlFor="password" variant="title14" align="left">
              {t('내용')}
            </Styled.Title>
            <Styled.TextArea required id="content" name="content" rows={10} defaultValue={data.content || ''} />
            <div css={buttonArea}>
              <Styled.BottomButton type="submit" size="md" className={clsx([isLoading ? 'loading' : ''])}>
                {t('작성')}
              </Styled.BottomButton>
            </div>
          </Styled.Form>
        </Styled.Paper>
      </Styled.Background>
    </>
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
const buttonArea = css`
  display: flex;
`;
export default WriteModal;
