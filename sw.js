const CACHE = 'mcdo-shifts-v2';

const FILES = [
  '/Maccie/',
  '/Maccie/index.html',
  '/Maccie/manifest.json',
  '/Maccie/icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
