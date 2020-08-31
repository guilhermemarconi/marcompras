import { createContext } from 'react';

interface User {
  user: {
    userId: String,
    email: String,
  };
  setUser: Function;
}

const baseContextValue: User = {
  user: {
    userId: '',
    email: '',
  },
  setUser: () => {},
}

export const UserContext = createContext(baseContextValue);
