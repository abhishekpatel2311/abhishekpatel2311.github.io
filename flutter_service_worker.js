'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0d6b17756c58af18af6b9a2d8789af49",
"assets/AssetManifest.bin.json": "a210a59173c95b18ad49a88b59344259",
"assets/AssetManifest.json": "213fd1ac55e944219fc3c080bcd8c1b6",
"assets/assets/fonts/ibm_plex/IBMPlexMono-Bold.ttf": "be4cc57a744421b843e08a2001436f40",
"assets/assets/fonts/ibm_plex/IBMPlexMono-Light.ttf": "5155fa9274059415db950c2edf3948bb",
"assets/assets/fonts/ibm_plex/IBMPlexMono-Medium.ttf": "3594148d0a094b10fc8e21ae7aaef7d9",
"assets/assets/fonts/ibm_plex/IBMPlexMono-Regular.ttf": "ea96a0afddbe8ff439be465b16cbd381",
"assets/assets/fonts/ibm_plex/IBMPlexMono-SemiBold.ttf": "892b0e616e4dd0381b579d848d98bcbc",
"assets/assets/fonts/outfit/Outfit-Bold.ttf": "e28d1b405645dfd47f4ccbd97507413c",
"assets/assets/fonts/outfit/Outfit-ExtraBold.ttf": "d649fd9b3a7e7c6d809b53eede996d18",
"assets/assets/fonts/outfit/Outfit-Light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"assets/assets/fonts/outfit/Outfit-Medium.ttf": "3c88ad79f2a55beb1ffa8f68d03321e3",
"assets/assets/fonts/outfit/Outfit-Regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/fonts/outfit/Outfit-SemiBold.ttf": "f4bde7633a5db986d322f4a10c97c0de",
"assets/assets/fonts/stylish/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/assets/icons/appbar/github-fill.svg": "498d7f19a6025bb820c5392fc8984a7c",
"assets/assets/icons/appbar/instagram-line.svg": "2471e96fef9d230c5998ad8a5dad75e0",
"assets/assets/icons/appbar/linkedin-box-fill.svg": "8dd01844c6ddee5836d213d9c7da08ef",
"assets/assets/icons/appbar/mail-fill.svg": "bed703437012ba8be0fb2fe651f4b421",
"assets/assets/icons/appbar/medium-fill.svg": "0b11736f08f2586de20600ff654cdaa2",
"assets/assets/icons/appbar/twitter-x-fill.svg": "59e33409dd6312d3c22b5ff7e9d39642",
"assets/assets/icons/body/css3-fill.svg": "54a01c78578f878473e5cf615eb3355c",
"assets/assets/icons/body/dart-fill-black.svg": "6f45d30f80dda96195ef86861f2bd42e",
"assets/assets/icons/body/firebase-fill.svg": "c88c1f0f81d24d59df4c08c4402fe900",
"assets/assets/icons/body/flutter-fill.svg": "d68e37405335f7dfc4612c443a94d70a",
"assets/assets/icons/body/github-fill-white.svg": "e3f36e2f1f59df8a0bd4f868e5b49231",
"assets/assets/icons/body/html5-fill.svg": "947bc22e0a4f820bf96fd718fae2eabd",
"assets/assets/icons/body/instagram-line-white.svg": "ca4fd1567308e077fef08585503782fe",
"assets/assets/icons/body/java-line.svg": "7032605f9acae7b1cdaa00da9ef967c4",
"assets/assets/icons/body/linkedin-box-fill-white.svg": "93092f46a09517e34f32b6d05540e989",
"assets/assets/icons/body/linkedin-fill.svg": "8de96655eda3b00e7f5517a82c9e9b89",
"assets/assets/icons/body/medium-fill-white.svg": "a31e08b27c1104498ebcde7ef03d8b04",
"assets/assets/icons/body/phone-line.svg": "1b958d6d1cae55e371adf1242998ddfe",
"assets/assets/icons/body/send_email-line.svg": "234b8202ecf45d1e06c437ae97ab7e26",
"assets/assets/icons/body/sql-fill.svg": "bc63ae1d9dd3d0ae6d640498d546443a",
"assets/assets/icons/body/twitter-x-fill-white.svg": "4ef88d70f543eb204d1268146e39a796",
"assets/assets/images/background/big_circle.svg": "15f3fd0210fc6c5f9cbf2dbe0d00d413",
"assets/assets/images/background/black_lines.svg": "ef4b3a5c1d7eb16f12a85770284f0a46",
"assets/assets/images/background/double_decker.svg": "3ccf9ffaa3ec19d562a4da1020b5a87b",
"assets/assets/images/background/kidney.svg": "4a7c3e059810541c4ef7e7d8cec8332e",
"assets/assets/images/background/small_liver.svg": "b32af059e62ee6b600d7f6a5c6757199",
"assets/assets/images/body/letsTalkImage.png": "f0a1ebe797211436923aaa004b757fe0",
"assets/assets/images/body/myimage1.png": "894afe80472febfa7276ca86fa021ec6",
"assets/assets/images/body/myimage2.png": "0427b13d9d8864e8a2736ac0ee88dc2c",
"assets/assets/lottie/cicle_orbit.json": "40d9e3fc4a34952b2bf28226ec7eaf77",
"assets/assets/lottie/circular_dots_line.json": "16505d5a4095025e69e1e3ed86dbe830",
"assets/assets/lottie/dots_outwards.json": "b25d8f7a340f489247a6ca0671a2a7d8",
"assets/assets/lottie/wavy_circular_lines.json": "4183efbd4fc338caf51d3ecb0ff06dd9",
"assets/FontManifest.json": "6d489b7d2d94743e07acecc621a02b03",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "51a1a4bb51408e441fe003b8247e1898",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png.ico": "6a935038b6cde519c00b093db0546eb3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ae4b9bdf7cb9be4fe1941c5848d03bed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/myimage1.png": "894afe80472febfa7276ca86fa021ec6",
"index.html": "446a1caa47bb300b4c7b2a84262f5e90",
"/": "446a1caa47bb300b4c7b2a84262f5e90",
"main.dart.js": "5122497ba15f1dd9be120567e8b588d7",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
