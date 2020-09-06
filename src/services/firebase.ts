import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBICNDgWVahdu_dyP5_zHUDv7Sbkk5wIgY',
  authDomain: 'marcompras-c258a.firebaseapp.com',
  databaseURL: 'https://marcompras-c258a.firebaseio.com',
});

export const database = firebaseApp.database();

interface EditItem {
  id: string;
  name: string;
  type: string;
  checked: boolean;
  creationDate: number;
  checkingDate?: number;
}

export function editItem(itemData: EditItem) {
  return new Promise((resolve, reject) => {
    database
      .ref(`items/${itemData.id}`)
      .set({ ...itemData }, (error) =>
        error ? reject(error) : resolve({ ...itemData })
      );
  });
}

export function deleteItem(id: string): void {
  database.ref(`items/${id}`).remove();
}
