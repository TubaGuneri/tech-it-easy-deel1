import {inventory} from "../constants/inventory.js";

function getScreenSize(x) {
    let result = ""
    let op = '';
    let i = 0
    const allScreenSizes = inventory.availableSizes.map((tv) => {
        return result += op.concat(`${tv.availableSizes[i]} inch (${(Math.round(tv.availableSizes[i] * 2, 54))} cm)`);
        op = "| ";

    })
}

export default getScreenSize;


