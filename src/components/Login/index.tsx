import React, { useState, useRef } from 'react';

import { login } from 'services/authentication';

import * as S from './styles';

const errorMessages = {
  'auth/wrong-password': 'Senha incorreta.',
  'auth/user-not-found': 'Usuário não encontrado.',
};

function Login() {
  const [buttonText, setButtonText] = useState('Entrar');
  const [buttonDisabled, setButtonDisabledState] = useState(false);
  const form = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    setButtonDisabledState(true);
    setButtonText('Entrando...');
    login(email, password).catch((error) => {
      console.error(error);
      setButtonDisabledState(false);
      setButtonText('Entrar');
      alert(errorMessages[error.code] || 'Houve um erro ao entrar.');
    });

    return false;
  }

  return (
    <S.Form ref={form} onSubmit={handleSubmit}>
      <h1>Login</h1>

      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          ref={emailInput}
          type="email"
          id="email"
          required
          aria-required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          ref={passwordInput}
          type="password"
          id="password"
          required
          aria-required
        />
      </fieldset>

      <button type="submit" disabled={buttonDisabled}>
        {buttonText}
      </button>
    </S.Form>
  );
}

export default Login;
