import React, { useContext } from 'react';

import Logo from 'components/Logo';
import { UserContext } from 'services/UserContext';
import { logout } from 'services/authentication';

import * as S from './styles';

function Header(): JSX.Element {
  const { setUser } = useContext(UserContext);

  function handleLogout() {
    logout().then(() => {
      setUser({});
    });
  }

  return (
    <S.Wrapper>
      <Logo />
      <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
    </S.Wrapper>
  );
}

export default Header;
