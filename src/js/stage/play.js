import * as me from "melonjs/dist/melonjs.module.js";

import HUD from "../renderables/hud/container.js";
import data from "../data.js";

export default class PlayScreen extends me.Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    // load a level

    console.log(me.level);
    me.level.load("level1");

    // reset the score
    data.score = 0;

    // add our HUD to the game world
    this.HUD = new HUDContainer();
    me.game.world.addChild(this.HUD);
  }

  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent() {
    // remove the HUD from the game world
    me.game.world.removeChild(this.HUD);
  }
}
