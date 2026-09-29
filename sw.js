Perfect! Aap bilkul sahi jagah par ho!

Ab bas ye code *"Enter file contents here"* wali jagah par paste karna hai:
const CACHE='rk-railway-v1';
self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg']))
  );
  self.skipWaiting();
});
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
*Paste karne ke baad:*

1. Upar hara *Commit changes...* button dabao
2. Fir se hara *Commit changes* dabao

Ho jaye to screenshot bhejo, fir aapki App *LIVE* kar dete hain!
