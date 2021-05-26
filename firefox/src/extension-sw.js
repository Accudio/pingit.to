const UNSPLASH_CACHE = 'unsplash-images'

self.addEventListener('activate', event => {
  const currentCaches = [UNSPLASH_CACHE]
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        )
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete)
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  // skip requests from other chrome extensions
  if (event.request.url.indexOf('chrome-extension') === -1) {
    // skip requests that aren't for unsplash
    if (event.request.url.indexOf('unsplash') === false) {
      return
    }
    event.respondWith(
      caches.open(UNSPLASH_CACHE).then(async cache => {
        return cache.match(event.request).then(response => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
          return response || fetchPromise
        })
      })
    )
  }
})
