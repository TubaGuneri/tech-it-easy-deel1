import {inventory} from "../constants/inventory.js";
import getScreenSize from "./screenSizes.js";

    function showAllTvs () {
       const allTvs = inventory.map((tv)=> {
           console.log (`${tv.brand} - ${tv.type}- ${tv.name}`);
       })
}

export default showAllTvs;