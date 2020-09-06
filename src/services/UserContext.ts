import { createContext } from 'react';

interface User {
  user: {
    userId: string;
    email: string;
  };
  setUser: Function;
}

const baseContextValue: User = {
  user: {
    userId: '',
    email: '',
  },
  setUser: () => null,
};

export const UserContext = createContext(baseContextValue);
