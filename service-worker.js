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
        return response || fetch(event.request);
      })
    );
  });
  