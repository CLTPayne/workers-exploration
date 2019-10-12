// Requires node >=11.7.0
// Can use the --experimental-worker flag with earlier node

const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
	console.log("Main thread is here");

	// Pass the current file to the Worker constructor
	const worker = new Worker(__filename);

	worker.on("message", message => console.log(message));
} else {
	const workerResult = [100, 200, 300].map(element => element / 100);

	parentPort.postMessage(
		`Hello main thread, I just calculated: ${workerResult}`
	);
}

// Main thread is here
// Hello main thread, I just calculated: 1,2,3
