import { collection, getDocs } from 'firebase/firestore';

import { fireStore } from 'plugins/firebase';
import type { IMessage } from 'types/message';

export const readAll = async () => {
  const querySnapshot = await getDocs(collection(fireStore, 'wedding'));
  if (querySnapshot.docs)
    return (querySnapshot.docs.find(({ id }) => id === 'guest-book')?.data()?.data as IMessage[]) || [];
  return [];
};
