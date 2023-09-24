import type { FC } from 'react';

import Image from 'next/image';

import Typography from 'components/common/Typography';
import { Styled } from 'components/Message/Styled';
import type { IMessage } from 'types/message';

interface MessageProps {
  isAdmin?: boolean;
  item: IMessage;
}

const get2Word = (num: number) => String(num).padStart(2, '0');

const Message: FC<MessageProps> = ({ item }) => {
  const date = item.updatedAt.toDate();
  const year = date.getFullYear();
  const month = get2Word(date.getMonth() + 1);
  const day = get2Word(date.getDate());
  const hour = get2Word(date.getHours());
  const minute = get2Word(date.getMinutes());
  const second = get2Word(date.getSeconds());

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image fill src="https://source.unsplash.com/random/100%C3%97100?animal" sizes="50px" alt="김xx님" />
      </Styled.ImageWrapper>
      <Styled.MessageContainer>
        <Styled.Message>
          <Typography variant="body4">{item.content}</Typography>
          <Typography variant="writter" align="right">
            {item.name}
          </Typography>
        </Styled.Message>
        <Typography variant="datetime" align="right">
          {`${year}-${month}-${day} ${hour}:${minute}:${second}`}
        </Typography>
      </Styled.MessageContainer>
    </Styled.Container>
  );
};
export default Message;
