### Javascript Workers

There are web workers and service workers - two different things! They are both JavaScript workers though. This means that they can't access the DOM directly. They communicate with the web page by responding to messages sent via the `postMessage` interface.

#### Web Workers

Used to move any heavy process off of the main thread of JavaScript. There is no specific use case for web workers, their key feature is that they run seperately to the main thread. This can improve performance for a user as a site will not be rendered unresponsive during a large thread blocking process.

#### Service Workers

A proxy between the browser and the network and or the cache. Once 'installed', a service worker is able to intercept network requests made from the main document / file it was registered in. The service worke then handles whether to return a document from the cache vs going to the network to satisfy the intercepted request. This enables offline functionality.

The browser runs the service worker script in the background, distinct from the web page. It's a gateway to features that don't need user interaction to trigger them. These include:

-   Push notifications
-   Background synchonisation on a regular time interval. E.g. an app can update the content available offline by checking for content available on the network side every 15 mins.

There is no global state in the handlers as the service worker is terminated when not in use. If you need data to persist across restarts, they do have access to the IndexedDB API.

Service workers heavily rely on JavaScript promises.

Warning, deployed incorrectly, a service worker can break the user's browser and they wouldn't be able to tell what's causing the issue.

Before the service worker API, offline experience was enabled via the AppCache API.

#### General Resources:

-   https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/
-   https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6
-   [Node Workers Documentation](https://nodejs.org/api/worker_threads.html#worker_threads_worker_threads)
-   https://developers.google.com/web/fundamentals/primers/service-workers
-   [Service Worker Api](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
-   [AppCache](https://www.html5rocks.com/en/tutorials/appcache/beginner/)
-   [Push Notifications](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)
-   [Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)
