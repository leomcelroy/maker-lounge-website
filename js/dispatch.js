import { view } from "./view.js";
import { render } from "../libs/lit-html.js";
import { Router } from "./Router.js";

const router = new Router();

router.add("", () => { 
	dispatch("CHANGE_MAIN", { target: "home" });
});

router.add("/guides", () => { 
	dispatch("CHANGE_MAIN", { target: "guides" })
});

router.add("/resources", () => { 
	dispatch("CHANGE_MAIN", { target: "resources" });
});

const items = [
	{
		name: "Epilog Mini 60W Laser Cutter", 
		link:"https://docs.google.com/document/d/1adYlESglp25XwS8KHj7crDyFYC35ZxkZPLHzktWvQ2k/edit?usp=sharing", 
		desc: "a good cutter", 
		image: "https://www.epiloglaser.com/assets/img/products/2019/helix-straight-wide-sm.jpg" 
	},
	{
		name: "Monoprice Mini FDM 3D Printer", 
		link: "https://docs.google.com/presentation/d/1zZ67Qqg5LFc9fqYJ0dF9T4cNb4OzKm2oeJXNK69jNbg/edit?usp=sharing", 
		desc: "a tiny 3D printer", 
		image: "https://images.monoprice.com/productlargeimages/217111.jpg" 
	},
	{
		name: "HP Designjet", 
		link: "https://docs.google.com/document/d/194fUZCHbJ9EaR2MsrnLOJprlX2hKgVwD8w9SRR06PFo/edit?usp=sharing", 
		desc: "a big printer", 
		image: "https://static.bhphoto.com/images/images2500x2500/1533231567_1426923.jpg" 
	},
	{
		name: "Formlabs SLA 3D Printer", 
		link: "https://docs.google.com/document/d/1mNMsQQKHGI-PiZhIv9ej6tH5nVwAY6H_j6Dhw_3R8Oo/edit?usp=sharing", 
		desc: "a prototyping machine", 
		image: "https://formlabs-media.formlabs.com/filer_public_thumbnails/filer_public/62/b7/62b749e8-39ee-4c4f-91d8-c5d1207f4328/form2-hero-mobile.jpg__800x0_q85_subsampling-2.jpg" 
	}

]


const resources = [];
// https://boxy-svg.com/
// http://gramlanguage.com/
// https://grid.space/kiri/
// https://solvespace.com/index.pl
// https://www.autodesk.com/products/fusion-360/personal
// https://inkscape.org/
// https://formlabs.com/software/
// https://designer.gravit.io/
// https://www.tinkercad.com/
// https://easel.inventables.com/users/sign_in
// https://snapdrop.net/
// https://editor.method.ac/
// https://ncviewer.com/
// http://www.drawsvg.org/
// https://www.janvas.com/public-apps/janvas_6.3/janvas_app_6.3/index.php
// https://www.figma.com/

const STATE = {
	router,
	items,
	resources,
	main: "home"
};

const ACTIONS = {
	INIT() {},
	CHANGE_MAIN({ target }, state) {
		state.main = target;
	},
	STATE(args, state) {
		console.log(state);
	}
}

export function dispatch(action, args = {}, rerender = true) {
	const trigger = ACTIONS[action];
	if (trigger) trigger(args, STATE);
	else console.log("Action not recongnized:", action);

	if (rerender) {
		render(view(STATE), document.body);
	}
}