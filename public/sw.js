var APPNAME = 'sampleApp';
var VERSION = "1.0.3";
var CACHENAME = APPNAME + ":" + VERSION;
// var CACHELIST = [
//     "/",
//     "/sw-sample-app",
//     "/sw-sample-app/",
//     "/sw-sample-app/offline.html",
//     "/sw-sample-app/index.html"
// ];

var CACHELIST = [
    "/offline.html"
];

/*******  Service Worker Event Handlers *******/

self.addEventListener("install", function (event) {
    console.log("Installing the Service Worker!");
    caches.open(CACHENAME)
        .then(cache => {
            cache.addAll(CACHELIST);
        });
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