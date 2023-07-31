// service-worker.js
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => cache.addAll([
        /* List of files to cache, e.g., CSS, JS, and images */
      ]))
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  