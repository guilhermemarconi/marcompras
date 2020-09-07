import React, { useState, useContext } from 'react';
import Hammer from 'react-hammerjs';
import classnames from 'classnames';

import { FormContext } from 'services/FormContext';
import { editItem, deleteItem } from 'services/firebase';

import ActionButton from 'components/ActionButton';

import { ReactComponent as CheckIcon } from './check.svg';
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
  checked = false,
  type = 'normal',
  creationDate = Date.now(),
}: ListItemInterface): JSX.Element {
  const [swiped, setSwipe] = useState(null);

  const { setEditingItem } = useContext(FormContext);

  function handleCheckedState() {
    editItem({
      id,
      name,
      type,
      creationDate,
      checkingDate: checked ? null : Date.now(),
      checked: !checked,
    });
  }

  function handleSwipe(event) {
    const direction = event.offsetDirection === 2 ? 'left' : 'right';
    setSwipe(swiped ? (swiped !== direction ? null : direction) : direction);
    return false;
  }

  function handleEditButton(id) {
    setEditingItem(id);
    setSwipe(null);
  }

  function handleDeleteButton(id) {
    if (window.confirm(`Tem certeza que deseja remover ${name}?`)) {
      deleteItem(id);
      setSwipe(null);
    }
  }

  return (
    <S.Wrapper id={id}>
      <S.ActionButtonsWrapper>
        <ActionButton action="edit" id={id} handler={handleEditButton} />
        <ActionButton action="delete" id={id} handler={handleDeleteButton} />
        <S.ActionButtonsSpacer />
        <ActionButton action="edit" id={id} handler={handleEditButton} />
        <ActionButton action="delete" id={id} handler={handleDeleteButton} />
      </S.ActionButtonsWrapper>

      <Hammer onSwipe={handleSwipe} direction="DIRECTION_HORIZONTAL">
        <S.Item
          onClick={() => handleCheckedState()}
          className={classnames({
            'swipe-left': swiped === 'left',
            'swipe-right': swiped === 'right',
            checked: checked,
            [type]: true,
          })}
        >
          {/* {type === 'normal' ? null : null} */}
          <S.CheckBoxInput
            type="checkbox"
            checked={checked}
            onChange={() => null}
          />
          <S.CheckBox>{checked ? <CheckIcon /> : null}</S.CheckBox>
          <S.ItemName>{name}</S.ItemName>
        </S.Item>
      </Hammer>
    </S.Wrapper>
  );
}

export default ListItem;
