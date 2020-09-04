import { firebaseApp } from './firebase';

export function login(username, password) {
  return new Promise((resolve, reject) => {
    firebaseApp
      .auth()
      .setPersistence('local')
      .then(() => {
        firebaseApp
          .auth()
          .signInWithEmailAndPassword(username, password)
          .then(({ user }) => {
            return resolve({
              userId: user.uid,
              email: user.email,
            });
          });
      })
      .catch(reject);
  });
}

export function logout() {
  return firebaseApp.auth().signOut();
}
