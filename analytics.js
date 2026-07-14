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

track(eventName,data={}){

logEvent(

analytics,

eventName,

data

);

console.log(

"[Analytics]",

eventName,

data

);

}

};
