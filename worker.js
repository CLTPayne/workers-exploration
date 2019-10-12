this.onmessage = function(event) {
	console.log("Message from main thread is: ", event.data);
	const workerResult = [1, 2, 3, 4].filter(element => element - 1 > 1);
	this.postMessage(workerResult);
};
