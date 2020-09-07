import React, { useState, useEffect, useContext } from 'react';

import Header from 'components/Header';
import ListItem from 'components/ListItem';
import FloatingButton from 'components/FloatingButton';
import Form from 'components/Form';
import { UserContext } from 'services/UserContext';
import { FormContext } from 'services/FormContext';
import { database } from 'services/firebase';

import * as S from './styles';

function List(): JSX.Element {
  const { user } = useContext(UserContext);
  const [showForm, setFormVisibility] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    const itemsRef = database.ref('items');
    itemsRef.on('value', (snapshot) => {
      setItems(snapshot.exists() ? snapshot.val() : {});
    });
  }, []);

  if (!user.userId) return null;

  const itemsArr = Object.keys(items);

  return (
    <FormContext.Provider
      value={{
        editingItem,
        setEditingItem,
        showForm,
        setFormVisibility,
      }}
    >
      <Header />

      {itemsArr.length ? (
        itemsArr.map((item) => <ListItem key={item} {...items[item]} />)
      ) : (
        <S.EmptyList>Adicione um item</S.EmptyList>
      )}

      <Form show={editingItem || showForm} {...items[editingItem]} />

      <FloatingButton show={!editingItem && !showForm} />
    </FormContext.Provider>
  );
}

export default List;
