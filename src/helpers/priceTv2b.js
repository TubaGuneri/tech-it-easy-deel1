import {bestSellingTv} from "../constants/inventory.js";

function showPrice () {
        return `€${bestSellingTv.price}, -`;
}

export default showPrice