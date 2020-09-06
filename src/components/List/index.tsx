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
      if (snapshot.exists()) setItems(snapshot.val());
    });
  }, []);

  if (!user.userId) return null;

  return (
    <FormContext.Provider
      value={{
        editingItem,
        setEditingItem,
        showForm,
        setFormVisibility,
      }}
    >
      <S.Wrapper>
        <Header />

        {Object.keys(items).map((item) => (
          <ListItem {...items[item]} key={item} />
        ))}

        {editingItem || showForm ? (
          <Form {...items[editingItem]} />
        ) : (
          <FloatingButton />
        )}
      </S.Wrapper>
    </FormContext.Provider>
  );
}

export default List;
