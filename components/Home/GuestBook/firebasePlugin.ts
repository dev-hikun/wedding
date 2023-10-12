import { collection, getDocs, Timestamp, addDoc, query, orderBy, where, setDoc, doc } from 'firebase/firestore';

import { fireStore } from 'plugins/firebase';
import type { IMessage } from 'types/message';
import { getDate } from 'utils/common';

export const readAll = async () => {
  const db = collection(fireStore, 'wedding');
  const q = query(db, where('isDeleted', '!=', true), orderBy('isDeleted', 'desc'), orderBy('datetime', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.reduce((acc, doc) => {
    if (doc.exists()) {
      return [
        ...acc,
        {
          docId: doc.id,
          ...doc.data(),
          password: undefined,
        },
      ];
    }
    return acc;
  }, []);
};

export const postGuestBook = async (data: Partial<IMessage>) => {
  const guestBookRef = collection(fireStore, 'wedding');
  const date = new Date();
  const { year, month, day } = getDate(date);

  const image = await fetch('https://source.unsplash.com/random/100%C3%97100?animal')
    .then((response) => response.blob())
    .then((image) => {
      return new Promise<string | ArrayBuffer>((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.onload = function (fileLoadedEvent) {
          resolve(fileLoadedEvent.target.result);
        };
      });
    });

  await addDoc(guestBookRef, {
    ...data,
    datetime: Timestamp.fromDate(date),
    updatedAt: Timestamp.fromDate(date),
    id: data.name + year + String(month) + day,
    isDeleted: false,
    image,
  });
};

export const checkPassword = async (docId: string, password: string) => {
  const db = collection(fireStore, 'wedding');
  const q = query(db, where('password', '==', password));
  const querySnapshot = await getDocs(q);
  return !!querySnapshot.size;
};

export const deleteGuestBook = async (docId: string) => {
  const db = doc(collection(fireStore, 'wedding'), docId);
  return setDoc(db, { isDeleted: true, updatedAt: Timestamp.fromDate(new Date()) }, { merge: true });
};

export const modifyGuestbook = async (message: Partial<IMessage>) => {
  const db = doc(collection(fireStore, 'wedding'), message.docId);
  delete message.password;
  return setDoc(db, { ...message, updatedAt: Timestamp.fromDate(new Date()) }, { merge: true });
};
