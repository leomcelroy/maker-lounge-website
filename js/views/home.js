import { html } from '../../libs/lit-html.js';
import marked from 'https://cdn.skypack.dev/marked';

const text = `
## Welcome to the CIC maker lounge.

Here you can find guides and other resources to help you utilize the makerspace.
`

export const home = () => html`
	<div class="md-container home">
		${html([marked(text)])}
	</div>
`