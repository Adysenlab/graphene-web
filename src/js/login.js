// Sign In With Google account USABLE in ES6 version
export const doGoogleSignIn = () => 
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());