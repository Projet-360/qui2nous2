var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/pwaStyle.css',
  '/js/pwaScript.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
////////////////////////////////////////////
// network first strategy
////////////////////////////////////////////
self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request).catch(function() {
      return caches.match(e.request)
    })
  );
});
////////////////////////////////////////////
// cache first strategy
////////////////////////////////////////////
// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });
