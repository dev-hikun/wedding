import { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/GuestBook/Styled';
import Message from 'components/Message';
import type { IMessage } from 'types/message';

const GuestBook = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<IMessage[]>([]);

  useEffect(() => {
    const init = async () => {
      if (typeof window === 'undefined') return;
      const { readAll } = await import('./firebasePlugin');
      const data = await readAll();
      console.log(data[0].datetime.toDate());
      setList(data);
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
          <Message key={`${item.name}`} item={item} />
        ))}
      </Styled.ChatRoom>
    </Styled.Panel>
  );
};

export default GuestBook;
