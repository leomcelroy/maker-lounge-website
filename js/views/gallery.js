import { html } from '../../libs/lit-html.js';

function entry({ name, desc, link, image }) {
	return html`
		<a class="entry" href="${link}">
			<div class="image-container">
				<img src=${image} alt="no alt">
			</div>

			<div class="desc-container">
				<b>${name}</b><br>
				<div>${desc}</div>
			</div>
		</a>
	`
}

export function gallery({ items }) {
	return html`
		<style>		
			.gallery {
				display: grid;
				place-items: center;
				background: white;
				/* width: 100%; */
				/* height: 100%; */
			}

			.entry {
				display: grid;
				padding: 5px;
				background: var(--color);
				width: 50%;
			    grid-template: ". ." 100% / 50% 1fr;
				place-items: center;
				margin: 10px;
				border: 2px dashed transparent;
				border-radius: 5px;
				text-decoration: none;
				color: black;
			}

			.entry a {
				text-decoration: none;
				color: black;
			}

			.entry:hover {
				border: 2px dashed black;
				cursor: pointer;
			}

			.image-container {
				display: grid;
				place-content: center;
			}

			.desc-container {
				width: 100%;
				height: 100%;
				display: grid;
				place-content: center start;
				padding: 10px;
				box-sizing: border-box;
			}
		</style>
		<div class="gallery">
			${items.map( item => entry(item) )}
		</div>
	`
}