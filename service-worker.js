// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        // List of file URLs to cache
        '/app.html',     // Replace with your actual CSS file URL
        '/assets/saber.png',         // Replace with your actual JS file URL
        '/assets/swoosh.svg' // Replace with your actual image URL
        // Add more file URLs as needed
      ]);
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
        caches.open('my-cache').then(cache => {
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