import React, { useState } from 'react';

import { UserContext } from 'services/UserContext';
import List from 'components/List';
import Login from 'components/Login';

import GlobalStyles from 'style/global';
import * as S from './styles';

function App() {
  const [user, setUser] = useState({
    userId: '',
    email: '',
  });

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
