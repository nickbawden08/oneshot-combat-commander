self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("combat-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});
