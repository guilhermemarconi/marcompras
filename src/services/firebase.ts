import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBICNDgWVahdu_dyP5_zHUDv7Sbkk5wIgY',
  authDomain: 'marcompras-c258a.firebaseapp.com',
  databaseURL: 'https://marcompras-c258a.firebaseio.com',
});

export const database = firebaseApp.database();
