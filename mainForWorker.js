export const myWorker = new Worker("worker.js");

myWorker.postMessage("Hi there worker thread");

myWorker.onmessage = function(event) {
	console.log("Message from worker is: ", event.data);
};
