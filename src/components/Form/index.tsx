import React, { useState, useRef, useContext } from 'react';
import Hammer from 'react-hammerjs';
import classnames from 'classnames';

import { FormContext } from 'services/FormContext';
import { generateUniqueId } from 'services/utils';
import { database } from 'services/firebase';

import * as S from './styles';

interface FormInterface {
  id?: string;
  name?: string;
  type?: string;
  show: boolean;
}

function Form({ id, name, type, show }: FormInterface): JSX.Element {
  const [nameValue, setNameValue] = useState(name || '');
  const [nameFocused, setNameFocus] = useState(true);
  const nameRef = useRef(null);
  const typeRef = useRef(null);

  const { setFormVisibility, setEditingItem } = useContext(FormContext);

  function hideForm() {
    setFormVisibility(false);
    setEditingItem(null);
  }

  function saveData(event) {
    event.preventDefault();
    const itemId = id || generateUniqueId();

    database.ref(`items/${itemId}`).set({
      id: itemId,
      name: nameRef.current.value,
      type: typeRef.current.value,
      creationDate: Date.now(),
    });

    hideForm();
  }

  return (
    <S.Wrapper>
      <S.Overlay className={classnames({ visible: show })} />

      <Hammer onSwipe={() => hideForm()} direction="DIRECTION_DOWN">
        <S.MainForm
          className={classnames({ visible: show })}
          onSubmit={saveData}
        >
          {/* <S.CloseButton onClick={() => hideForm()} /> */}

          <S.Fieldset>
            <S.Input
              type="text"
              id="itemName"
              value={nameValue}
              ref={nameRef}
              autoFocus
              required
              aria-required
              onChange={() => setNameValue(nameRef.current.value)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />
            <S.Label
              className={classnames({ alt: nameFocused || nameValue })}
              htmlFor="itemName"
            >
              Nome
            </S.Label>
          </S.Fieldset>

          <S.Fieldset>
            <S.Select id="itemType" defaultValue={type || ''} ref={typeRef}>
              <option value="normal" defaultChecked>
                Normal
              </option>
              <option value="urgent">Urgente</option>
            </S.Select>
            <S.Label className={classnames({ alt: true })} htmlFor="itemType">
              Tipo
            </S.Label>
          </S.Fieldset>

          <S.SubmitButton type="submit">
            {id ? 'Atualizar' : 'Adicionar'}
          </S.SubmitButton>
        </S.MainForm>
      </Hammer>
    </S.Wrapper>
  );
}

export default Form;
