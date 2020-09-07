import React, { useContext } from 'react';
import classnames from 'classnames';

import { FormContext } from 'services/FormContext';

import * as S from './styles';

interface FloatingButton {
  show: boolean;
}

function FloatingButton({ show }: FloatingButton): JSX.Element {
  const { setFormVisibility } = useContext(FormContext);

  return (
    <S.Button
      className={classnames({ visible: show })}
      onClick={() => setFormVisibility(true)}
    />
  );
}

export default FloatingButton;
