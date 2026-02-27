self.addEventListener('install', (e) => {
  console.log('Service Worker 已安裝');
});

self.addEventListener('fetch', (e) => {
  // 暫不處理快取，僅讓 PWA 符合安裝標準
  e.respondWith(fetch(e.request));
});