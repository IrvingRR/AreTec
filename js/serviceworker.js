;
const CACHE_NAME = 'v1_cache_aretec',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'https://use.fontawesome.com/releases/v5.0.7/css/all.css',
    'https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2',
    'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    '../css/style.css',
    '../css/contact.css',
    '../css/curses.css',
    '../css/navbar.css',
    '../css/footer.css',
    '../css/globals-styles.css',
    '../css/services.css',
    '../pages/services.html',
    '../pages/curses.html',
    '../pages/contact.html',
    './script.js',
    './navbar.js',
    './firebase-messaging-sw.js',
    './messages.js',
    './navbar.js',
    './slider.js',
    '../img/AreTec.png',
    '../img/hero-background.jpg',
    '../img/social-media-background.jpg',
    '../img/services-background.jpg',
    '../img/service-mobile-development.jpg',
    '../img/contact-background.jpg',
    '../img/chocoworks.png'
  ]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        return fetch(e.request)
      })
  )
})
