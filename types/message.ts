import type { Timestamp } from 'firebase/firestore';

export interface IMessage {
  name: string;
  datetime: Timestamp;
  password: string;
  content: string;
  updatedAt: Timestamp;
}
