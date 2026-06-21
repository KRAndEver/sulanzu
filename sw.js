const CACHE_NAME = 'sulsul-app-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// 앱을 처음 설치할 때 캐시(임시 저장소)에 파일 저장
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 앱을 실행할 때 오프라인에서도 작동하도록 캐시 불러오기
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
