if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1a48c3c1-a2c33885359ad06a.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/1bfc9850-4c265a8d6e1cde8a.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/205-caf3de2fddc639d6.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/252f366e-32a29372ea171ab9.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/framework-c9ea973475b1a840.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/main-a7fc0b1700e5bb50.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/pages/_app-870f5c6a92ab5d85.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/pages/index-074409b720aaeac2.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/chunks/webpack-e443416cc051def9.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/css/81954c3db3918147.css",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/yA1RY0I0HejNnX45U6V3X/_buildManifest.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/yA1RY0I0HejNnX45U6V3X/_middlewareManifest.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/_next/static/yA1RY0I0HejNnX45U6V3X/_ssgManifest.js",revision:"yA1RY0I0HejNnX45U6V3X"},{url:"/favicon.ico",revision:"a7a52bed6417d56a70b6fa5198e0c42a"},{url:"/landingImage.svg",revision:"4373afa7492cf61de73a07c18d69e348"},{url:"/logo.png",revision:"ae1a89641ec1c2c89fde882b5aef44e1"},{url:"/manifest.json",revision:"3f9bf5ca39ba0d7fed4e5301c1419586"},{url:"/robots.txt",revision:"ca121b5d03245bf82db00d14cee04e22"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));