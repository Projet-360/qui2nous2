import App from './views/App.svelte';

import './css/global.css';
import './js/UI.js';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then(registration => {
		}).catch(registrationError => {
		});
	});
}

const app = new App({
	target: document.body,

});

window.app = app;

export default app;