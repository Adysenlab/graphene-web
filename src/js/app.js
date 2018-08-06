import '../css/main.scss';
import '../dash.html'
import 'jquery';


// jquery is working on this website

$("p").click(function(){
    console.log('dick p fired up');
  });

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
  apiKey: "AIzaSyDvrw3MpeJyFbRcU7gZs9o8nelq6I8ot8I",
  authDomain: "radii-website.firebaseapp.com",
  databaseURL: "https://radii-website.firebaseio.com",
  projectId: "radii-website",
  storageBucket: "radii-website.appspot.com",
  messagingSenderId: "592618696557"
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

