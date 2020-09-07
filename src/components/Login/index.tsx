import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import { login } from 'services/authentication';

import * as S from './styles';

const errorMessages = {
  'auth/wrong-password': 'Senha incorreta.',
  'auth/user-not-found': 'Usuário não encontrado.',
};

function Login(): JSX.Element {
  const [buttonText, setButtonText] = useState('Entrar');
  const [buttonDisabled, setButtonDisabledState] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
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
      <S.FieldSet>
        <S.Input
          ref={emailInput}
          type="email"
          id="email"
          value={emailValue}
          required
          aria-required
          onChange={() => setEmailValue(emailInput.current.value)}
        />
        <S.Label className={classnames({ alt: emailValue })} htmlFor="email">
          Email
        </S.Label>
      </S.FieldSet>

      <S.FieldSet>
        <S.Input
          ref={passwordInput}
          type="password"
          id="password"
          value={passwordValue}
          required
          aria-required
          onChange={() => setPasswordValue(passwordInput.current.value)}
        />
        <S.Label
          className={classnames({ alt: passwordValue })}
          htmlFor="password"
        >
          Senha
        </S.Label>
      </S.FieldSet>

      <S.SubmitButton type="submit" disabled={buttonDisabled}>
        {buttonText}
      </S.SubmitButton>
    </S.Form>
  );
}

export default Login;
