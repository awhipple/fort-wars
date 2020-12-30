import Avocado from "./libraries/avocado/engine/GameEngine.js";
import Color from "./libraries/avocado/gfx/Color.js";
import Circle from "./libraries/avocado/gfx/shapes/Circle.js";

window.onload = function() {
  (new Game()).start();
};

export default class Game {
  constructor(options = {}) {
    this.avo = new Avocado({
      ...options
    });

    // Debug
    // window.avo = this.avo;
    // this.engine.setProd();
  }

  start() {
    this.avo.load().then(() => {
      
      var color = Color.random();

      var cir = new Circle({x: 500, y: 500}, 40, {color});
      this.avo.register(cir);
      
      this.avo.onUpdate(() => {
          cir.pos = this.avo.mouse.pos;
      });
    });
  }

}
