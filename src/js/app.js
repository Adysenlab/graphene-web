import '../css/main.scss';
import '../404.html'
import 'jquery';
import { RandomGenerator } from './random-generator';

// jquery is working on this website

$("p").click(function(){
    console.log('dick p fired up');
  });

/*node firebase link
this website will serve as a client to the server that  is in development 

*/

//add service worker and place the webapp in the homescreen

(function () {
  if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./service-worker.js', {scope: '/'})
 .then(() => console.log('Service Worker registered successfully.'))
 .catch(error => console.log('Service Worker registration failed:', error));
 }
 })();