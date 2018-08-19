import '../css/main.scss';
import '../dash.html'




/*node firebase link
this website will serve as a client to the server that  is in development 

*/

import firebase from "firebase";
// Initialize Firebase
// TODO: Replace with your project's customized code snippet


(function () {
  if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./service-worker.js', {scope: '/'})
 .then(() => console.log('Service Worker registered successfully.'))
 .catch(error => console.log('Service Worker registration failed:', error));
 }
 })();


var config = {
  apiKey: APP_SECRETS_HERE,
  authDomain: APP_SECRETS_HERE,
  databaseURL: APP_SECRETS_HERE,
  projectId: APP_SECRETS_HERE,
  storageBucket: APP_SECRETS_HERE,
  messagingSenderId: APP_SECRETS_HERE
};
firebase.initializeApp(config)

var auth = firebase.auth(firebase);
//add service worker and place the webapp in the homescreen


// add login using google
var gLogin = document.getElementById('gLogin');

gLogin.onclick = function(){

  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
    console.log("GoogleLogin done");
    window.location.href='dash.html';
  }).catch(() => {
    console.log("login request not accepted");
    window.location.href='dash.html';
  });

  
}

