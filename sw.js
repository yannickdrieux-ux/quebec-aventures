const CACHE = 'qa-v1';
const ASSETS = [
  '/quebec-aventures/',
  '/quebec-aventures/index.html',
  '/quebec-aventures/css/style.css',
  '/quebec-aventures/js/app.js',
  '/quebec-aventures/js/data.js',
  '/quebec-aventures/js/i18n.js',
  '/quebec-aventures/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
