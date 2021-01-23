import { html } from '../libs/lit-html.js';

import { menu } from "./views/menu.js";
import { home } from "./views/home.js";
import { gallery as guides } from "./views/gallery.js";
import { resources } from "./views/resources.js";
// import { videos } from "./views/videos.js";


const main = {
	home,
	guides,
	resources
}

export function view(state) {

	return html `
		<div class="container">
			<div>${menu(state)}</div>
			<div class="main">${main[state.main](state)}</div>
		</div>
	`
};