"use strict";

//To jest do pwa nie edytuj tutaj nic ...

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Niżej możesz pisać.




const button = document.querySelector('.header__hamburgerbutton--js')
button.addEventListener('click', (e) => {
const nav = document.querySelector('.nav')
nav.classList.toggle('nav--js')
if(nav.classList.contains('nav--js')){
    button.innerHTML = 'x'
}
else{
    button.innerHTML = '≡'
}
})


