import { Stage } from "melonjs/dist/melonjs.module.js";
import * as me from "melonjs/dist/melonjs.module.js";

class TitleScreen extends Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    me.level.load("level1");
  }

  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent() {
    // TODO
  }
}

export default TitleScreen;
