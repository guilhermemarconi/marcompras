import React, { useEffect, useContext } from 'react';

import Header from 'components/Header';
import { UserContext } from 'services/UserContext';

import * as S from './styles';

function List() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const localUserData = JSON.parse(
      decodeURIComponent(localStorage.getItem('userData') || '{}')
    );

    if (!user.userId) {
      if (localUserData.userId) {
        setUser(localUserData);
      }
    }
  }, [user, setUser]);

  return (
    <S.Wrapper>
      <Header />

      <h1>List</h1>
    </S.Wrapper>
  );
}

export default List;
