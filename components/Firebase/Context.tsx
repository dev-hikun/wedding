import { createContext, memo, useMemo } from 'react';

import { getAnalytics, type Analytics } from 'firebase/analytics';
import { initializeApp, type FirebaseApp } from 'firebase/app';
interface FirebaseContextProps {
  firebase: FirebaseApp | null;
  analytics: Analytics | null;
}

export const Context = createContext<FirebaseContextProps>({
  firebase: null,
  analytics: null,
});

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const Provider = ({ children }) => {
  const value = useMemo(() => {
    if (typeof window === 'undefined') return { firebase: null, analytics: null };
    const firebase = initializeApp(firebaseConfig);
    const analytics = getAnalytics(firebase);
    return { firebase, analytics };
  }, []);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const FirebaseContext = {
  Provider: memo(Provider),
};
export default FirebaseContext;
