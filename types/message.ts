import type { Timestamp } from 'firebase/firestore';

export interface IMessage {
  docId: string;
  name: string;
  datetime: Timestamp;
  content: string;
  updatedAt: Timestamp;
  password: string;
  image: string;
}
