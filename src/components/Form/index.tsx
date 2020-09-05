import React, { useRef } from 'react';

import { generateUniqueId } from 'services/utils';
import { database } from 'services/firebase';

import * as S from './styles';

interface FormInterface {
  id?: string;
  name?: string;
  type?: string;
}

function Form(props: FormInterface) {
  const { id, name, type } = props;
  const nameRef = useRef(null);
  const typeRef = useRef(null);

  function saveData(event) {
    event.preventDefault();
    const itemId = id || generateUniqueId();

    database.ref(`items/${itemId}`).set({
      id: itemId,
      name: nameRef.current.value,
      type: typeRef.current.value,
      creationDate: Date.now(),
    });
  }

  return (
    <S.Wrapper onSubmit={saveData}>
      <S.Fieldset>
        <S.Label htmlFor="itemName">Nome</S.Label>
        <S.Input
          type="text"
          id="itemName"
          defaultValue={name || ''}
          ref={nameRef}
          required
          aria-required
        />
      </S.Fieldset>

      <S.Fieldset>
        <S.Label htmlFor="itemType">Tipo</S.Label>
        <S.Select id="itemType" defaultValue={type || ''} ref={typeRef}>
          <option value="normal" defaultChecked>
            Normal
          </option>
          <option value="urgent">Urgente</option>
        </S.Select>
      </S.Fieldset>

      <S.SubmitButton type="submit">
        {id ? 'Atualizar' : 'Adicionar'}
      </S.SubmitButton>
    </S.Wrapper>
  );
}

export default Form;
