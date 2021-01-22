import { html } from '../../libs/lit-html.js';

const baseAddress = () => window.location.href.replace(window.location.hash, '');

export function menu(state) {
	return html`
		<style>
			.menu {
				grid-area: menu;
				display: grid; 
				background: var(--color);
				border-bottom: grey 1px solid;
				grid-template:
					". ." 100%
					/ 20% 80%;
			}

			.name {
				display: grid;
				place-content: center;
				width: 100%;
			}

			.name:hover {
				background: grey;
				cursor: pointer;
			}

			.links {
				display: flex;
				place-self: center end;
			}

			.link {
				padding: 15px;
				text-decoration: none;
			    color: black;
			}

			.link:hover {
				background: grey;
				cursor: pointer;
			}
		</style>
		<div class="menu">
			<a class="name link" href="${baseAddress()}">maker lounge</a>
			<div class="links">
				<a class="link" href="${baseAddress()}#/guides">guides</a>
				<a class="link" href="${baseAddress()}#/resources">resources</a>
			</div>
		</div>
	`
}