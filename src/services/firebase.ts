import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
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
