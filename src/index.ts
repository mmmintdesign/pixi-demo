import * as PIXI from "pixi.js-legacy";
import { SmoothGraphics as sGraphics } from "@pixi/graphics-smooth";

console.log("loaded");
class Main extends PIXI.Application {
	public constructor() {
		// PIXI.utils.skipHello();
		PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

		let view = document.querySelector("#canvas-container canvas") as HTMLCanvasElement;

		super({
			view: view,
			backgroundColor: 0x222222,
			width: window.innerWidth,
			height: window.innerHeight,
			antialias: false,
			// resolution: window.devicePixelRatio || 1
		});

		this.ticker.add((delta) => {
			// console.log(delta);
		});

		let myGraphic = new sGraphics();
		myGraphic.lineStyle(4, 0xff00ff);
		myGraphic.line.cap = PIXI.LINE_CAP.ROUND;
		myGraphic.line.join = PIXI.LINE_JOIN.ROUND;
		myGraphic.moveTo(100, 100);
		myGraphic.lineTo(200, 200);

		myGraphic.interactive = true;

		this.stage.addChild(myGraphic);
	}
}

const main: Main = new Main();
