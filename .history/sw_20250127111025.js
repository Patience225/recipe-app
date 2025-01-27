// sw.js - Service Worker
const CACHE_NAME = "recipe-app-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
  "/images/Avocado Toast.jpeg", // Add your images here
  "/images/Burgers.jpeg",
  "/images/Burrito Bowl.jpeg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
