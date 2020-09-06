import React, { useContext } from 'react';

import { FormContext } from 'services/FormContext';

import * as S from './styles';

function FloatingButton(): JSX.Element {
  const { setFormVisibility } = useContext(FormContext);

  return <S.Button onClick={() => setFormVisibility(true)} />;
}

export default FloatingButton;
