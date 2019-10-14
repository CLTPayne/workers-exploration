// Install
this.addEventListener("install", event =>
	// normally during install you want to cache some static assets
	// if all the files cache successfully the service worker is installed
	console.log("Service worker installed")
);

this.addEventListener("activate", event =>
	// if any files fail to download and install it won't be activated
	// activation follows successful install
	// this is a good time to manage old caches
	console.log("Service worker activated")
);

this.addEventListener("fetch", event => {
	console.log("Service worker fetching from cache");
	event.respondWith(caches.match(event.request));
});
