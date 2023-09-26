// service-worker.js
const cacheName = 'Swooshly v1.0'; // Update the cache name when the cache needs to be updated

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        // List of file URLs to cache
        '/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
        '/splash_screens/8.3__iPad_Mini_portrait.png',
        '/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png',
        '/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
        '/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12__iPhone_11_Pro__iPhone_11__X__XS__12_Mini_portrait.png',
        '/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12__iPhone_11_Pro__iPhone_11__X__XS__12_Mini_landscape.png',
        '/splash_screens/iPhone_12_Pro_Max__iPhone_12_Pro__iPhone_12__iPhone_11_Pro_Max__iPhone_11_Pro__iPhone_11__X__XS__12_Mini_portrait.png',
        '/splash_screens/iPhone_12_Pro_Max__iPhone_12_Pro__iPhone_12__iPhone_11_Pro_Max__iPhone_11_Pro__iPhone_11__X__XS__12_Mini_landscape.png',
        '/splash_screens/iPhone_8__7__6s__6__SE_portrait.png',
        '/splash_screens/iPhone_8__7__6s__6__SE_landscape.png',
        '/splash_screens/iPhone_8_Plus__7_Plus__6s_Plus__6_Plus_portrait.png',
        '/splash_screens/iPhone_8_Plus__7_Plus__6s_Plus__6_Plus_landscape.png',
        '/splash_screens/iPhone_5__5s__5c__SE_portrait.png',
        '/splash_screens/iPhone_5__5s__5c__SE_landscape.png',
        '/splash_screens/iPhone_4__4s_portrait.png',
        '/splash_screens/iPhone_4__4s_landscape.png',
        '/splash_screens/iPad_Pro_12.9__iPad_Pro_11__iPad_Air_4__iPad_8__iPad_7__iPad_6__iPad_5__iPad_Mini_5_portrait.png',
        '/splash_screens/iPad_Pro_12.9__iPad_Pro_11__iPad_Air_4__iPad_8__iPad_7__iPad_6__iPad_5__iPad_Mini_5_landscape.png',
        '/splash_screens/iPad_Pro_10.5_portrait.png',
        '/splash_screens/iPad_Pro_10.5_landscape.png',
        '/splash_screens/iPad_Pro_9.7_portrait.png',
        '/splash_screens/iPad_Pro_9.7_landscape.png',
        '/splash_screens/iPad_Mini_4_portrait.png',
        '/splash_screens/iPad_Mini_4_landscape.png',
        '/splash_screens/iPad_Air_2_portrait.png',
        '/splash_screens/iPad_Air_2_landscape.png',
        '/splash_screens/iPad_4_portrait.png',
        '/splash_screens/iPad_4_landscape.png',
        '/splash_screens/iPad_3_portrait.png',
        '/splash_screens/iPad_3_landscape.png',
        '/splash_screens/iPad_2_portrait.png',
        '/splash_screens/iPad_2_landscape.png',
        '/splash_screens/iPad_1_portrait.png',
        '/splash_screens/iPad_1_landscape.png',
        '/splash_screens/iPad_Mini_1__2__3_portrait.png',
        '/splash_screens/iPad_Mini_1__2__3_landscape.png',
        '/splash_screens/iPad_Mini_1__2__3__4_portrait.png',
        '/splash_screens/iPad_Mini_1__2__3__4_landscape.png',
        '/splash_screens/iPad_Air_1_portrait.png',
        '/splash_screens/iPad_Air_1_landscape.png',
        '/splash_screens/iPad_9.7__iPad_10.2__iPad_Air_2__iPad_Mini_4_portrait.png',
        '/splash_screens/iPad_9.7__iPad_10.2__iPad_Air_2__iPad_Mini_4_landscape.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3_portrait.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3_landscape.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4_portrait.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4_landscape.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4__iPad_Pro_10.5_portrait.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4__iPad_Pro_10.5_landscape.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4__iPad_Pro_12.9_portrait.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4__iPad_Pro_12.9_landscape.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4__iPad_Pro_9.7_portrait.png',
        '/splash_screens/iPad_9.7__iPad_Air__iPad_Air_2__iPad_Mini_2__iPad_Mini_3__iPad_Mini_4__iPad_Pro_9.7_landscape.png',
        '/pwa'
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