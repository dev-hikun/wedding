import { useCallback, useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';

import { Button } from 'components/common/Button';
import Typography from 'components/common/Typography';
import Styled from 'components/Home/GuestBook/Styled';
import WriteModal from 'components/Home/GuestBook/WriteModal';
import Message from 'components/Message';
import { color, spacing } from 'constants/theme';
import type { IMessage } from 'types/message';

const load = async () => {
  if (typeof window === 'undefined') return;
  const { readAll } = await import('./firebasePlugin');
  const data = await readAll();
  return data;
};

const check = async (id: string) => {
  const { checkPassword } = await import('./firebasePlugin');
  const value = prompt('비밀번호를 입력해주세요');
  if (!(await checkPassword(id, value))) {
    alert('비밀번호가 올바르지 않습니다.');
    return false;
  }
  return true;
};

const GuestBook = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<IMessage[]>([]);
  const [data, setData] = useState<Partial<IMessage> | null>(null);

  const handleWriteButtonClick = useCallback(() => setData({}), []);
  const handleWriteModalClose = useCallback(() => setData(null), []);
  const handleUpdate = useCallback(async () => {
    setList(await load());
  }, []);
  const handleEditClick = useCallback(async (message: IMessage) => {
    if (!(await check(message.docId))) return;
    setData(message);
  }, []);
  const handleDeleteClick = useCallback(async (message: IMessage) => {
    const result = await check(message.docId);
    if (!result) return;
    if (confirm('정말로 삭제하시겠습니까?')) {
      const { deleteGuestBook } = await import('./firebasePlugin');
      await deleteGuestBook(message.docId);
      setList(await load());
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      setList(await load());
    };
    init();
  }, []);
  return (
    <Styled.Panel>
      <Typography variant="pageTitle" align="center">
        {t('방명록')}
      </Typography>
      <Styled.ChatRoom>
        {list.map((item) => (
          <Message
            key={`${item.docId}`}
            item={item}
            onClickModify={handleEditClick}
            onClickDelete={handleDeleteClick}
          />
        ))}
      </Styled.ChatRoom>

      <Styled.ButtonArea>
        <Button css={GuestBookButtonClass} onClick={handleWriteButtonClick}>
          {t('방명록')} {t('작성')}
        </Button>
      </Styled.ButtonArea>
      {data !== null && <WriteModal data={data} onUpdate={handleUpdate} onClose={handleWriteModalClose} />}
    </Styled.Panel>
  );
};

const GuestBookButtonClass = css`
  position: sticky;
  flex: 1 0 100%;
  width: 100%;
  height: 48.5px;
  left: 0;
  right: 0;
  bottom: ${spacing[16]}px !important;
  padding: ${spacing[16]}px ${spacing[16]}px !important;
  background-color: ${color.green} !important;
  color: ${color.text};
`;

export default GuestBook;
