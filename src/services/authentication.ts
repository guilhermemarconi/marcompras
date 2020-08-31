import { firebaseApp } from './firebase';

export function login(username: string, password: string) {
  return new Promise((resolve, reject) => {
    firebaseApp
    .auth()
    .signInWithEmailAndPassword(username, password)
      .then(({ user }) => {
        resolve({
          userId: user.uid,
          email: user.email,
        });
      })
      .catch(reject);
  })
}

export function logout() {
  return firebaseApp.auth().signOut();
}
