import React from 'react';

import * as S from './styles';

import { ReactComponent as IconEdit } from './icon-pencil.svg';
import { ReactComponent as IconDelete } from './icon-trash.svg';

interface ActionButton {
  action: string;
  id?: string;
  handler?: (id: string) => void;
}

function ActionButton({ action, id, handler }: ActionButton): JSX.Element {
  function getActionInfo() {
    return (
      {
        edit: IconEdit,
        delete: IconDelete,
      }[action] || null
    );
  }

  const Icon = getActionInfo();

  return (
    <S.Wrapper className={action} onClick={() => handler(id)}>
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}

export default ActionButton;
