const VERSION = '0.0.2';
const URLS = [
  '/'
];

self.addEventListener('install', event =>
  event.waitUntil(
    caches.open(VERSION).then(cache =>
      cache.addAll(URLS)
    )
  )
);

self.addEventListener('activate', event =>
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map((key, i) => {
        if (key !== VERSION) {
          return caches.delete(keys[i]);
        }

        return key;
      }))
    )
  )
);

self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(request =>
      request || fetch(event.request)
    )
  )
);
