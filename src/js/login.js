// Sign In With Google account 
export const doGoogleSignIn = () => 
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());