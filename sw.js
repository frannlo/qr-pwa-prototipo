// Service worker mínimo: guarda lo básico para que la app abra sin conexión.
const CACHE = 'qr-proto-v1';
const ARCHIVOS = ['./', './index.html', './escaner.html', './pantalla.html', './manifest.webmanifest'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
