import {inventory} from "../constants/inventory.js";

function countBoughtTvs1c () {
    let boughtTvs= 0;

    for (let i = 0; i < inventory.length; i++) {
        boughtTvs += inventory[i].originalStock;

    }
    return boughtTvs;
}
export default countBoughtTvs1c