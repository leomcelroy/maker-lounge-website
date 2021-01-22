import { html } from '../../libs/lit-html.js';

const VIDEOS = [
	{
		src: "https://www.youtube.com/embed/qGdEhDfBuSQ",
		name: "First lesson",
		desc: "This lesson is relevant but not entirely up to date.",
	},
	{
		src: "https://www.youtube.com/embed/1NUV2iFNyT0",
		name: "Frugal Science Teach Me Anything",
		desc: "This lesson is relevant but not entirely up to date.",
	}
]

const video_iframe = src => html`<iframe class="lesson" width="560" height="315" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
const videoEntry = ({ src, desc, name }) => html`
	<style>
		.lesson {
			padding: 10px;
		}

		.video-entry {
			background: #d3d3d3;
			margin: 10px;
			border-radius: 5px;
			border: 3px solid #d3d3d3;
		}
	</style>
	<div class="video-entry">
		<div class="video-container">
			${video_iframe(src)}
		</div>

		<div class="desc-container">
			<b>${name}</b><br>
			<div>${desc}</div>
		</div>
	</div>
`; 
export const videos = () => html`
	<style>
		.lesson {
			padding: 10px;
		}
	</style>
	<div class = "gallery">
		${VIDEOS.map( x => videoEntry(x))}
	</div>
`