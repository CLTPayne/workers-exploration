### Javascript Workers

There are web workers and service workers - two different things!

#### Web Workers

Used to move any heavy process off of the main thread of JavaScript. There is no specific use case for web workers, their key feature is that they run seperately to the main thread. This can improve performance for a user as a site will not be rendered unresponsive during a large thread blocking process.

#### Service Workers

A proxy between the borwser and the network and or the cache. Once 'installed', a service worker is able to intercept network requests made from the main document / file it was registered in. The service worke then handles whether to return a document from the cache vs going to the network to satisfy the intercepted request. This enables offline functionality.

#### General Resources:

-   https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/
-   https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6
-   [Node Workers Documentation](https://nodejs.org/api/worker_threads.html#worker_threads_worker_threads)
-   https://developers.google.com/web/fundamentals/primers/service-workers
-   https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
