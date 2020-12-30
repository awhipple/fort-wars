import Avocado from "./libraries/avocado/engine/GameEngine.js";
import AnimatedSprite from "./libraries/avocado/gfx/sprites/AnimatedSprite.js";
import Animation from "./libraries/avocado/gfx/sprites/Animation.js";
import KeyFrames from "./libraries/avocado/gfx/sprites/KeyFrames.js";
import Sprite from "./libraries/avocado/gfx/sprites/Sprite.js";

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

    this.avo.images.preload("F_01");
    
    this.avo.load().then(() => {

      var img = this.avo.images.get("F_01");
      img.cut(16, 17);

      var anim = this.avo.register(new AnimatedSprite(new Animation(new KeyFrames([img[4], img[8]]))));
      
      this.avo.onUpdate(() => {
      });

      this.avo.draw((ctx) => {
        anim.getFrame().draw(ctx, 150, 150, 50, 50);
      });
      
    });
  }

}
