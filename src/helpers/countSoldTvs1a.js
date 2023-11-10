import {inventory} from "../constants/inventory.js";

function countSoldTvs1a () {
    let soldTvs= 0;

    for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold;
    }
    return soldTvs;
}
export default countSoldTvs1a

//opdracht 1b is via App.css uitgevoerd