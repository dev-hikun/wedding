import type { Timestamp } from 'firebase/firestore';

export interface IMessage {
  docId: string;
  name: string;
  datetime: Timestamp;
  password: string;
  content: string;
  updatedAt: Timestamp;
  image: string;
}
