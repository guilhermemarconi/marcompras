import React, { useState } from 'react';
import Hammer from 'react-hammerjs';

import ActionButton from 'components/ActionButton';

import * as S from './styles';

interface ListItemInterface {
  checked?: boolean;
  checkingDate?: number;
  creationDate?: number;
  id: string;
  name: string;
  type?: string;
}

function ListItem({
  id,
  name,
  type = 'normal',
  checked = false,
  creationDate = Date.now(),
}: ListItemInterface): JSX.Element {
  const [swiped, setSwipe] = useState(null);

  function handleSwipe(event) {
    const direction = event.offsetDirection === 2 ? 'left' : 'right';
    setSwipe(swiped ? null : direction);
  }

  return (
    <S.Wrapper id={id}>
      <S.ActionButtonsWrapper>
        <ActionButton></ActionButton>
        <ActionButton></ActionButton>
        <ActionButton></ActionButton>
        <ActionButton></ActionButton>
      </S.ActionButtonsWrapper>

      <Hammer onSwipe={handleSwipe} direction="DIRECTION_HORIZONTAL">
        <S.Item type="button">
          <S.CheckBox />
          <S.ItemName>{name}</S.ItemName>
        </S.Item>
      </Hammer>
    </S.Wrapper>
  );
}

export default ListItem;
