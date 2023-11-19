import {inventory, inventory as tv} from "../constants/inventory.js";

function getSoldTvs () {

   const tvsSold = inventory.filter((tv)=> tv.originalStock === tv.sold);
   console.log(tvsSold);
    }

export default getSoldTvs;