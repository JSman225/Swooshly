// service-worker.js
const cacheName = 'my-cache-v5'; // Update the cache name when the cache needs to be updated

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        // List of file URLs to cache
        '/app.html'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If the request is already in the cache, return the cached response
      if (response) {
        return response;
      }

      // If the request is not in the cache, fetch it from the network
      return fetch(event.request).then(networkResponse => {
        // Clone the network response to save it in the cache
        const clonedResponse = networkResponse.clone();

        // Save the network response to the cache
        caches.open(cacheName).then(cache => {
          cache.put(event.request, clonedResponse);
        });

        // Return the network response
        return networkResponse;
      }).catch(() => {
        // If fetching from the network fails (device is offline), respond with the offline message
        return new Response("You're offline", {
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
});
