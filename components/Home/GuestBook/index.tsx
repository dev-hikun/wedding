import { useEffect, useState } from 'react';

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

const GuestBook = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<IMessage[]>([]);
  const [id, setId] = useState(-1);

  const handleWriteButtonClick = () => setId(0);
  const handleWriteModalClose = () => setId(-1);
  const handleUpdate = async () => {
    setList(await load());
  };

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
          <Message key={`${item.docId}`} item={item} />
        ))}
      </Styled.ChatRoom>

      <Styled.ButtonArea>
        <Button css={GuestBookButtonClass} onClick={handleWriteButtonClick}>
          방명록 남기기
        </Button>
      </Styled.ButtonArea>
      {id !== -1 && <WriteModal onUpdate={handleUpdate} onClose={handleWriteModalClose} />}
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
  background-color: ${color.gray100};
  color: ${color.text};
`;

export default GuestBook;
