import {inventory} from "../constants/inventory.js";
import countBoughtTvs1c from "./countBoughtTvs1c.js";
import countSoldTvs1a from "./countSoldTvs1a.js";

function toSellTvs() {
    for (let i = 0; i < inventory.length; i++) {
      return countBoughtTvs1c() - countSoldTvs1a()
    }
}

export default toSellTvs

//rood letter kleur via App.css