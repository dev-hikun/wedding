import { memo, type FC } from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Typography from 'components/common/Typography';
import { Styled } from 'components/Message/Styled';
import type { IMessage } from 'types/message';
import { get2Word, getDate } from 'utils/common';

import deleteIcon from 'assets/icons/icon-delete.svg';
import modifyIcon from 'assets/icons/icon-modify.svg';

interface MessageProps {
  item: IMessage;
  onClickModify: (item: IMessage) => Promise<void>;
  onClickDelete: (item: IMessage) => Promise<void>;
}

const Message: FC<MessageProps> = ({ item, onClickModify, onClickDelete }) => {
  const { t } = useTranslation();
  const date = item.datetime.toDate();
  const { year, month, day } = getDate(date);
  const hour = get2Word(date.getHours());
  const minute = get2Word(date.getMinutes());
  const second = get2Word(date.getSeconds());

  const action = (action: 'edit' | 'delete' = 'edit') =>
    action === 'edit' ? onClickModify(item) : onClickDelete(item);
  const handleDeleteButton = () => action('delete');
  const handleEditButton = () => action();

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image fill src={item.image} sizes="50px" alt={item.name} />
      </Styled.ImageWrapper>
      <Styled.MessageContainer>
        <Styled.Message>
          <Typography variant="body4">{item.content}</Typography>
          <Typography variant="writter" align="right">
            {item.name}
            <Typography variant="datetime" as="span">
              {` / ${year}-${month}-${day} ${hour}:${minute}:${second}`}
            </Typography>
          </Typography>
        </Styled.Message>
        <div css={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Styled.Icon onClick={handleEditButton}>
            <Image src={modifyIcon} width={14} height={14} alt={t('수정')} />
          </Styled.Icon>
          <Styled.Icon onClick={handleDeleteButton}>
            <Image src={deleteIcon} width={14} height={14} alt={t('삭제')} />
          </Styled.Icon>
        </div>
      </Styled.MessageContainer>
    </Styled.Container>
  );
};
export default memo(Message);
