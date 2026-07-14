/* ==========================================================
   RECTI-VALVE PRO
   PROFESSIONAL CACHE ENGINE
   BUILD-014
   VERSION 2.0.0
========================================================== */

const CACHE_NAME="rectivalve-v4";

/*----------------------------------------------------------
ARCHIVOS ESTÁTICOS
----------------------------------------------------------*/

const STATIC_FILES=[

"./",

"./index.html",

"./manifest.json",

"./icons/icon-192.png",

"./icons/icon-512.png"

];

/*----------------------------------------------------------
INSTALACIÓN
----------------------------------------------------------*/

self.addEventListener("install",(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>cache.addAll(STATIC_FILES))

);

self.skipWaiting();

});

/*----------------------------------------------------------
ACTIVACIÓN
----------------------------------------------------------*/

self.addEventListener("activate",(event)=>{

event.waitUntil(

caches.keys()

.then(keys=>

Promise.all(

keys

.filter(key=>key!==CACHE_NAME)

.map(key=>caches.delete(key))

)

)

.then(()=>self.clients.claim())

);

});

/*----------------------------------------------------------
FETCH
----------------------------------------------------------*/

self.addEventListener("fetch",(event)=>{

const request=event.request;

const url=new URL(request.url);

/*=========================================
HTML
Network First
=========================================*/

if(request.mode==="navigate"){

event.respondWith(

fetch(request)

.then(response=>{

const copy=response.clone();

caches.open(CACHE_NAME)

.then(cache=>cache.put(request,copy));

return response;

})

.catch(()=>caches.match(request))

);

return;

}

/*=========================================
ARCHIVOS CRÍTICOS
Siempre versión nueva
=========================================*/

if(

url.pathname.endsWith("manifest.json") ||

url.pathname.endsWith("analytics.js") ||

url.pathname.endsWith("service-worker.js")

){

event.respondWith(fetch(request));

return;

}

/*=========================================
IMÁGENES E ICONOS
Cache First
=========================================*/

event.respondWith(

caches.match(request)

.then(response=>{

if(response)return response;

return fetch(request)

.then(network=>{

const copy=network.clone();

caches.open(CACHE_NAME)

.then(cache=>cache.put(request,copy));

return network;

});

})

);

});
