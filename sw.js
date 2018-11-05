const VERSION = '0.0.15';
const URLS = [
  '/',
  '/index.html',
  '/404.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-192.png',
  '/favicon-512.png',
  '/img/spacer.gif',
  '/img/alien-00.svg',
  '/img/alien-01.svg',
  '/img/alien-02.svg',
  '/img/alien-03.svg',
  '/img/alien-04.svg',
  '/img/alien-05.svg',
  '/img/alien-06.svg',
  '/img/alien-07.svg',
  '/img/alien-08.svg',
  '/img/alien-09.svg',
  '/img/alien-10.svg',
  '/img/alien-11.svg',
  '/img/alien-12.svg',
  '/img/alien-13.svg',
  '/img/alien-14.svg',
  '/img/alien-15.svg',
  '/img/alien-16.svg',
  '/img/alien-17.svg',
  '/img/alien-18.svg',
  '/img/alien-19.svg',
  '/img/alien-20.svg',
  '/img/alien-21.svg',
  '/img/alien-22.svg',
  '/img/alien-23.svg',
  '/img/alien-24.svg',
  '/img/alien-25.svg',
  '/img/alien-26.svg',
  '/img/alien-27.svg',
  '/img/alien-28.svg',
  '/img/alien-29.svg',
  '/img/alien-30.svg',
  '/img/alien-31.svg',
  '/img/alien-32.svg',
  '/img/alien-33.svg',
  '/img/alien-34.svg',
  '/img/alien-35.svg'
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
