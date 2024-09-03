const CACHE_NAME = 'cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png',
    'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
    'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});


