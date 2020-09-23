import { createContext, Dispatch, SetStateAction } from 'react';

interface User {
  user: {
    userId: string;
    email: string;
  };
  setUser: Dispatch<SetStateAction<{ userId?: string; email?: string }>>;
}

const baseContextValue: User = {
  user: {
    userId: '',
    email: '',
  },
  setUser: () => null,
};

export const UserContext = createContext(baseContextValue);
