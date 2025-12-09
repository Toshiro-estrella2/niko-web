'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6edd888397a59e92f5050610f3bd2ce0",
".git/config": "25445d2085bebff5179132afd4e7dbde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c8253aa7d44c0d96eba2594e07e688ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa4871c758b19547511a57a6c50390c4",
".git/logs/refs/heads/main": "b26621ab8185be81c18e5b388e319846",
".git/logs/refs/remotes/origin/main": "e9a8e7c2481bee137985cc46e7d5c5c7",
".git/objects/01/a12de4b91d9d94172f02c5cefb4362d50dd72c": "12a21516b2ea593da25ce8f7530b5a41",
".git/objects/16/135e66412972ee287369c96ce8cdab70ec196e": "c158b74d0ad002ca5fea7e67e1142fc1",
".git/objects/1a/cefa216e9d62c9e6fc34a691f4532ee2be20e5": "3038d7957595a8fc8391e377a5cfa0fa",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/0f627e68e5535464280acd48a0ae5d5d0153fc": "98fb9b11694a5c63c7bcdf2ba16705de",
".git/objects/2a/da177b800694fff3147ceded167bdb77c41326": "31d0893f5c8b151b049a13a3bf788081",
".git/objects/37/bc6d89081afc94e83708b33bd05a3b0c9fe381": "9e6c7779b7f2cc0d13901463549a8b8f",
".git/objects/3c/24d26d75b9d8ba6e112047a012e5a75d67ea21": "e439b09ae3a6fc185b0798b4c40e67e9",
".git/objects/3c/dfee3e6a3ac8eeaf3dd02a2457cf70a8ca253d": "7b31fc9ae51975a6c0472ab3a47e3daf",
".git/objects/3d/a4c628f3f56b14b8e7a7f3a0e795d7ecb2b835": "d796b40a7d0de9bfeb426cfa6c904994",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/b0e18e5bdc400a84fe708b21a03665dc57905c": "a40a4fee93967cbf280bfcbddc42afd9",
".git/objects/52/045f4a86611ebf3cde98fe8a657174bf3c6618": "4df3987ae24c60cf884fb9b2aca3b6f6",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/be82a26e93c312cecdf7dea78395c82dfaa821": "a97cd01bd4f511508eb6011d8c043622",
".git/objects/5c/62f8fcd32613d9822d5594346da3a8724dfccd": "2ad37d03de90eb7b88c5c4b9ba5825b9",
".git/objects/61/ac658a1769e09f9542c4ccac415b31b10fef82": "092c0f7acc6c36642850a4a37bf8737b",
".git/objects/69/5d488b29d2f65709d1446a1da1c66d40d0a8a4": "354c4543e83aca827109faf52c593b0e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/89776834a99756ba4e11339125d3204ede3b73": "0982ac279e9d54d5c0ed9238ac21a5d9",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/78/a19325f1fe3deb7c0d53afdfe8b00072bb496c": "f28a3f9251b966b314d2ee91749fc3ca",
".git/objects/79/64662f4cabbb4003066a8728a062bd21ab0e10": "5564b5443c056e1162e4a3e6e7252ef7",
".git/objects/7a/4e6536944afc36f2b780ea83802f64f7099a71": "777da3372877d72044bd3c08ec67311c",
".git/objects/7e/a4834a3c22f3f5f2bd6b6600501e48ec9ebb96": "4070f54de5b530ff6b5bdd0ddce2e812",
".git/objects/82/38f3ffff6f4510b8bc9744e6565bb6dd4d22a9": "da2b4ae386f0be93a090d1c8e5d9f935",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/347db686e26e9d1edbd68e954da8f591c6da12": "13524945e2ed88d91d2173f0e539e70f",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/94/14d10f73646153c5219e1b1b018bd47f077cb7": "fb75a581b4ad8da0590120ca5bc2ccc8",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/fe853df7c5418895b1506f74eafe3421bda303": "eb5532731fdffc9c6cc53abe010aa5ab",
".git/objects/a1/effcd5fa89b566dc5fa8a4125b556babd21010": "7d426d06d8156e9b5ca09c2095681bc1",
".git/objects/a2/5caca79a427a9d64e84605401b8daf504f9050": "b36fe341ead934dac07c61a89e02f320",
".git/objects/ac/6ff50ef1871875f47deb13c31c3c5a5ddf1ed7": "8f46098b0d98a8f66b6439a710c900b0",
".git/objects/ad/0a691a448c6b1056458e890a20d1df4b011eaa": "98aa308dd264926ce687f9d71bba403d",
".git/objects/af/4128c3516ea32d23c2e546f616e7c03c0f475c": "9e2d1e5f88a13a7e99d2733ea9b854ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/9cb12e0ef39f5c6a7cb751073ffc74d1dc6be7": "dbeccafe0adb83de150a9686d5a12ad1",
".git/objects/bf/b83a98f8d26da9bbd8887303cd91df0f207f58": "df8b34589ba8fee0ef278cc01a97c6be",
".git/objects/c2/15954a40ed3dae1249b830c6ed77c929a67096": "7787426e69a99e526c17fb0d75e84f8d",
".git/objects/c5/5f0d43a852130ca53b034d70f0905461f5b991": "3591ebaf300575353d06041b257f42d6",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d2/f9b7a800e9d8ca2f1169c5c2a757421df4d010": "f7edf0d26ca93bb44b7ce4c59fab6f2d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/4230c6ec5cdd4adae7f1141744498a72cbd468": "672966b196063907add3d5033ed89427",
".git/objects/d5/ecc93f3b6ef5806236fd20900f3d3a9b537c4d": "823766ee51f5df78cfc5f32d49523bbe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/ef094afb753d1f8cda7ee6e7dcac0131b92982": "442b07049ccedf2298763e15f0b75416",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/eb2ecb7d0e1afe76288ec40a50a5bbf5b542a4": "665f100799cb71666baab72165e8a16f",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/refs/heads/main": "7ac7eefddd6ab2d9fb3efb8adc5678f3",
".git/refs/remotes/origin/main": "7ac7eefddd6ab2d9fb3efb8adc5678f3",
"assets/AssetManifest.bin": "4b9bc58a16b71b8fd20345c8e2f4eaaf",
"assets/AssetManifest.bin.json": "896c7af435e47c6044e8272e86ca6175",
"assets/AssetManifest.json": "15f64546d5a61d7b77071193f65983d0",
"assets/assets/icono.png": "deaa1c8ced64d4008968a22aa7879b22",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6df830552d1396964532d96ff2039399",
"assets/NOTICES": "e2f1ea2dd65f1fc9048df4cb46095bae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e559307b8452c1733e43ccf130def58c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0835c020510c92f0842a66364e79296f",
"/": "0835c020510c92f0842a66364e79296f",
"main.dart.js": "5ed02470070dabb673af5bc26cb4a475",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
