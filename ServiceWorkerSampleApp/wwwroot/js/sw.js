var APPNAME = 'sampleApp';
var VERSION = "1.0.0";
var CACHENAME = APPNAME + ":" + VERSION;
var CACHELIST = [
    "/sw-sample-app/assets/logo.png",
    "/sw-sample-app/js/site.js",
    "/sw-sample-app/css/site.css",
];

/*******  Service Worker Event Handlers *******/

self.addEventListener("install", function (event) {
    console.log("Installing the Service Worker!");
    caches.open(CACHENAME)
        .then(cache => {
            cache.addAll(CACHELIST);
        });
});

self.addEventListener("activate", event => {
    console.log("Activating the Service Worker!");
    event.waitUntil(
        caches.keys().then(cacheNames => {
            cacheNames.forEach(value => {
                if (value.indexOf(CACHENAME) < 0) {
                    caches.delete(value);
                }
            });
            console.log("service worker activated");
            return;
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});