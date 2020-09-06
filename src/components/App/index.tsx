import React, { useState, useEffect } from 'react';

import { firebaseApp } from 'services/firebase';
import { UserContext } from 'services/UserContext';
import List from 'components/List';
import Login from 'components/Login';

import GlobalStyles from 'style/global';
import * as S from './styles';

function App(): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState({
    userId: '',
    email: '',
  });

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({
          userId: user.uid,
          email: user.email,
        });
      } else {
        setUser({
          userId: '',
          email: '',
        });
      }
      setLoaded(true);
    });
  }, []);

  if (!loaded) return null;

  return (
    <S.Wrapper>
      <GlobalStyles />
      <UserContext.Provider value={{ user, setUser }}>
        {user.userId ? <List /> : <Login />}
      </UserContext.Provider>
    </S.Wrapper>
  );
}

export default App;
