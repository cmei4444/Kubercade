if(!self.define){const e=e=>("require"!==e&&(e+=".js"),Promise.resolve().then(()=>{if(!n[e])return"document"in self?new Promise(t=>{const n=document.createElement("script");n.src=e,n.defer=!0,document.head.appendChild(n),n.onload=t}):void importScripts(e)}).then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})),t=(t,n)=>{Promise.all(t.map(e)).then(e=>1===e.length?e[0]:e).then(e=>n(e))},n={require:Promise.resolve(t)};self.define=((t,i,s)=>{n[t]||(n[t]=new Promise(n=>{let r={};const c={uri:location.origin+t.slice(1)};Promise.all(i.map(t=>"exports"===t?r:"module"===t?c:e(t))).then(e=>{s(...e),n(r)})}))})}define("./sw.js",["./chunk-539de822","./chunk-45c70e7a"],function(e,t){"use strict";var n="static-"+t.version,i=[n];self.addEventListener("install",function(t){var i=["assets/icon-05a70868.png","assets/icon-maskable-7a2eb399.png","assets/manifest-5126b4d8.json","assets/space-mono-normal-06a82676.woff2","assets/space-mono-bold-188d43a9.woff2","assets/favicon-516fb92d.png","assets/social-cover-54f08d2f.jpg","index-7dfa68a0.js","chunk-539de822.js","bootstrap.js","chunk-eb9e63f9.js","chunk-4fc10aa5.js","chunk-740044b8.js","chunk-45c70e7a.js","sw.js","lazy-load-ab71c6ec.js","chunk-a12f2b6f.js","chunk-a647c4b1.js","chunk-070e2192.js","chunk-817e9122.js","lazy-components-2c6193cb.js","chunk-2fc5265f.js","index-83a40a35.js","chunk-9e0cea02.js","index-cc63e70b.js","index-7416a412.js","index-605381e9.js","index-8d96265a.js","_headers",".well-known/assetlinks.json"].filter(function(e){return!("sw.js"===e||"bootstrap.js"===e||"_headers"===e||e.includes("manifest-")||e.includes("icon-")||e.includes("assetlinks-")||e.includes("social-"))}),s=e.__spread(["/"],i);t.waitUntil(function(){return e.__awaiter(this,void 0,void 0,function(){return e.__generator(this,function(e){switch(e.label){case 0:return[4,caches.open(n)];case 1:return[4,e.sent().addAll(s)];case 2:return e.sent(),[2]}})})}())}),self.addEventListener("activate",function(t){self.clients.claim(),t.waitUntil(function(){return e.__awaiter(this,void 0,void 0,function(){var t;return e.__generator(this,function(e){switch(e.label){case 0:return[4,caches.keys()];case 1:return t=e.sent().map(function(e){if(!i.includes(e))return caches.delete(e)}),[4,Promise.all(t)];case 2:return e.sent(),[2]}})})}())}),self.addEventListener("fetch",function(t){"GET"===t.request.method&&t.respondWith(function(){return e.__awaiter(this,void 0,void 0,function(){return e.__generator(this,function(e){switch(e.label){case 0:return[4,caches.match(t.request,{ignoreSearch:!0})];case 1:return[2,e.sent()||fetch(t.request)]}})})}())}),self.addEventListener("message",function(e){switch(e.data){case"skip-waiting":self.skipWaiting()}})});
//# sourceMappingURL=sw.js.map
