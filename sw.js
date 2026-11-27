const CACHE="wetterstudio-ultimate-v15";
const CORE=["./","./index.html","./manifest.webmanifest","./icon.svg","./host-sun.png","./host-sun-animated.gif","./host-cloud.png","./host-rain.png","./host-wind.png","./host-storm.png","./host-hot.png","./host-cloud-animated.gif","./host-rain-animated.gif","./host-wind-animated.gif","./host-storm-animated.gif","./host-hot-animated.gif"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);if(u.origin===location.origin){e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>cached)));}});
