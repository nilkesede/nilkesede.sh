const VERSION = '0.0.13';
const URLS = [
  '/',
  '/index.html',
  '/404.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-192.png',
  '/favicon-512.png'
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

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin === location.origin && URLS.includes(url.pathname)) {
    event.respondWith(caches.match(event.request));
  }
});
