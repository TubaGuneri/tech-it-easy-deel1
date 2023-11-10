import {bestSellingTv} from "../constants/inventory.js";


function generateTvName () {
            return `${bestSellingTv.brand} - ${bestSellingTv.type}- ${bestSellingTv.name}`;
}

export default generateTvName