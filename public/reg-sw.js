if ('serviceWorker' in navigator) {
    // then register our service worker
    navigator.serviceWorker.register('sw.js', { scope: '/' })
        .then(reg => {
            console.log(`Service Worker Registration (Scope: ${reg.scope})`);
        })
        .catch(error => {
            let msg = `Service Worker Error (${error})`;
            console.error(msg);
        });
} else {
    // happens when the app isn't served over a TLS connection (HTTPS)
    // or if the browser doesn't support service workers
    console.warn('Service Worker not available');
}