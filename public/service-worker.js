const CACHE_NAME = 'ether-cache'

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache
                .addAll(['/', '/index.html'])
                .then(() => self.skipWaiting())
        }),
    )
})

self.addEventListener('fetch', (e) => {
    if (navigator.onLine) {
        const fetchRequest = e.request.clone()
        return fetch(fetchRequest).then((response) => {
            if (
                response.url.indexOf('http') !== 0 ||
                fetchRequest.method !== 'GET' ||
                !response ||
                response.status !== 200 ||
                response.type !== 'basic'
            ) {
                return response
            }

            const responseCache = response.clone()

            caches.open(CACHE_NAME).then((cache) => {
                cache.put(e.request, responseCache)
            })
            return response
        })
    } else {
        e.responseWith(
            caches.match(e.request).then((response) => {
                if (response) {
                    return response
                }
            }),
        )
    }
})
