if ("serviceWorker" in navigator) {
  // then register our service worker
  navigator.serviceWorker
    .register("sw.js", { scope: "/sw-sample-app/" })
    .then((reg) => {
      console.log(`Service Worker Registration (Scope: ${reg.scope})`);
    })
    .catch((error) => {
      let msg = `Service Worker Error (${error})`;
      console.error(msg);
    });

    let refreshing;
   // The event listener that is fired when the service worker updates
   // Here we reload the page
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      window.location.reload();
      console.log('onCOntroller change')
      refreshing = true;
    });
} else {
  // happens when the app isn't served over a TLS connection (HTTPS)
  // or if the browser doesn't support service workers
  console.warn("Service Worker not available");
}
