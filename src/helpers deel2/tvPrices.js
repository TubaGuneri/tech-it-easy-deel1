import {inventory} from "../constants/inventory.js";

function showAllPrice () {
    return `€${inventory.price}, -`;
}

export default showAllPrice;