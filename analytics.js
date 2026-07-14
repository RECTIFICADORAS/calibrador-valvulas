/* ==========================================================
   RECTI-VALVE PRO
   ANALYTICS ENGINE
   BUILD-013A
   VERSION 1.0.0
========================================================== */

import { initializeApp }

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {

getAnalytics,

logEvent

}

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

/* ==========================================================
   FIREBASE CONFIG
========================================================== */

const firebaseConfig={

apiKey:"AIzaSyCevBNBxHwVvWdQaojnesF7Gf_PA3ockh4",

authDomain:"rectivalve-pro.firebaseapp.com",

projectId:"rectivalve-pro",

storageBucket:"rectivalve-pro.firebasestorage.app",

messagingSenderId:"457851768447",

appId:"1:457851768447:web:3319a70a8e867061b8394a",

measurementId:"G-5VY5SR3XVV"

};

/* ==========================================================
   INITIALIZE
========================================================== */

const app=

initializeApp(firebaseConfig);

const analytics=

getAnalytics(app);

/* ==========================================================
   PUBLIC API
========================================================== */

window.Analytics={

version:"1.0.0",

track(eventName,data={}){

const payload={

version:this.version,

...data

};

logEvent(

analytics,

eventName,

payload

);

console.log(

"[Analytics]",

eventName,

payload

);

},

appOpen(){

this.track(

"app_open"

);

},

workStarted(cylinders){

this.track(

"work_started",

{

cylinders

}

);

},

workCompleted(cylinders){

this.track(

"work_completed",

{

cylinders

}

);

},

engineSelected(cylinders){

this.track(

"engine_selected",

{

cylinders

}

);

},

orientationChanged(){

this.track(

"orientation_changed"

);

},

workRestored(){

this.track(

"work_restored"

);

},

workReset(){

this.track(

"work_reset"

);

},

pwaInstalled(){

this.track(

"pwa_installed"

);

}

};


Analytics.appOpen();
