import React, { useState, useEffect, useContext } from 'react';

import Header from 'components/Header';
import ListItem from 'components/ListItem';
import Form from 'components/Form';
import { UserContext } from 'services/UserContext';
import { database } from 'services/firebase';

import * as S from './styles';

function List() {
  const { user } = useContext(UserContext);
  const [items, setItems] = useState({});

  useEffect(() => {
    const itemsRef = database.ref('items');
    itemsRef.on('value', (snapshot) => {
      if (snapshot.exists()) setItems(snapshot.val());
    });
  }, []);

  if (!user.userId) return null;

  return (
    <S.Wrapper>
      <Header />

      {Object.keys(items).map((item) => (
        <ListItem {...items[item]} key={item} />
      ))}

      <Form />
    </S.Wrapper>
  );
}

export default List;
