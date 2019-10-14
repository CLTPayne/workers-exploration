// Register the service worker in the page's JavaScript
// The browser will then install it in the backgroud

const registerServiceWorker = () => {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("/serviceWorker.js").then(
				registration => {
					console.log(
						"Service worker registered successfully in scope of: ",
						registration.scope
					);
				},
				error => {
					console.log("Service worker registration failed: ", error);
				}
			);
		});
	}
};

export const serviceWorker = registerServiceWorker();
