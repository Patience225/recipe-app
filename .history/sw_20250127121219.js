const CACHE_NAME = "recipe-app-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/images/Avocado Toast.jpeg", 
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Caesar Salad.jpeg", 
  "/images/Chicken Wraps.jpeg",
  "/images/Chocolate Cake.jpeg",
  "/images/Churros.jpeg",
  "/images/Croissants.jpeg",
  "/images/French Toast.jpeg",
  "/images/Fruit Salad.jpeg",
  "/images/Grilled Chicken.jpeg",
  "/images/Grilled Salmon.jpeg",
  "/images/Ice Cream Sundae.jpeg",
  "/images/Lobster Tail.jpeg",
  "/images/Muffins.jpeg",
  "/images/Nachos.jpeg", 
  "/images/Omelette.jpeg",
  "/images/Pancakes.jpeg",
  "/images/Pizza.jpeg", 
  "/images/Spaghetti Carbonara.jpeg",
  "/images/Smoothie Bowl.jpeg",
  "/images/Steak.jpeg", 
  "/images/Tacos.jpeg",
  "/images/Vegetable Stir-fry.jpeg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
