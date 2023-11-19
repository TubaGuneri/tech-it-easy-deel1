import {inventory} from "../constants/inventory.js";


function getBigTvs () {
    const bigTvs = inventory.filter(bigTv => bigTv.availableSizes.some (size => size >= 65));
  console.log(bigTvs);

}

export default getBigTvs;