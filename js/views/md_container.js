import { html } from '../../libs/lit-html.js';
import marked from 'https://cdn.skypack.dev/marked';



let text = `
# Resources

Digital fabrication can generally be broken into three stages.

CAD => CAM => cut (gcode)

CAD stands for computer-aided design, 
CAM for computer-aided manufacturing, 
and gcode stands in for the instructions which are interpreted by the machine.

For each step in the process there are variety of programs available 
depending on the machine you're targeting and your preferences while crafting the design.

Among CAD programs a few gross classifications are 2D vs 3D design tools and parametric vs. direct modelling programs.
2D CAD programs include vector editors (like Inkscape or Adobe Illustrator or one of the options listed below) and photo editors
(such as Photoshop or GIMP). Photo editors operate at the pixel level and vector editors function by manipulating 
mathematical representations of geometry. The latter tends to be more useful for fabrication purposes. 
Popular 3D design tools include Solidworks, Fusion360, or Blender. 
The former two are examples of parametric modelling programs and the latter is a direct modelling program.
The distinction lies in being able to specify geometry through procedures or mathematical relationships (like dimensions and angles)
in parametric modelling programs versus having to drag geometry into position or specify coordinates in direct modelling programs.

For laser cutting you'll only need a 2D CAD program, for 3D printing you'll need a 3D one.

Moving on to the CAM step in the workflow. 
CAM can take the form of printing a document (as is the case for a laser cutter),
sending a file to a 3D slicer,
or specifying toolpaths for a CNC machine.

The CAM program generates instructions for the actual machine you'll run the job on. 
These instructions often come in the form of gcode which is essentially a list of points.

[Inkscape](https://inkscape.org/) -
2D vector editor useful for laser cutting,
open-source,
free to download

[Boxy SVG](https://boxy-svg.com/) -
2D vector editor useful for laser cutting,
web-based

[gram language](http://gramlanguage.com/) - 
accessible parametric design through a simple language,
made by former CICer,
web-based,
open-source

[Kiri-Moto](https://grid.space/kiri/) - 
slicer and toolpath generation for pretty much any machine,
open-source,
web-based

[Solvespace](https://solvespace.com/index.pl) - 
3D parametric modelling program,
open-source,
free to download

[Fusion360](https://www.autodesk.com/products/fusion-360/personal) -
3D industrial grade parametric modelling program,
permissive liscencing

[Pre-Form](https://formlabs.com/software/) -
slicer for the Formlabs 3D printer

[Gravit Designer](https://designer.gravit.io/) -
2D vector editor, 
web-based, 
freemium

[TinkerCAD](https://www.tinkercad.com/) -
3D direct modelling program,
web-based,
freemium

[Easel](https://easel.inventables.com/users/sign_in) -
easy to use CAM program,
web-based,
freemium

[Snapdrop](https://snapdrop.net/) -
useful web-based program for sharing files on the local network

[Method Draw](https://editor.method.ac/) -
simple 2D vector editor,
web-based,
open-source

[ncviewer](https://ncviewer.com/) -
program for viewing gcode,
web-based,
open-source

[drawsvg](http://www.drawsvg.org/) -
simple 2D vector editor,
web-based,
open-source

[janvas](https://www.janvas.com/public-apps/janvas_6.3/janvas_app_6.3/index.php) -
simple 2D vector editor,
web-based

[figma](https://www.figma.com/) -
industiral grade 2D vector editor,
web-based,
freemium

`

export function md_container() {
	return html`
		<div class = "md-container">
			${html([marked(text)])}
		</div>
	`
}