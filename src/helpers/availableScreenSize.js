import {bestSellingTv} from "../constants/inventory.js";

    function screenSize(){
    let result = ""
    let op='';
    for (let i = 0; i <bestSellingTv.availableSizes.length; i++) {
      result +=  op.concat(`${bestSellingTv.availableSizes[i]} inch (${(Math.round(bestSellingTv.availableSizes[i]* 2,54))} cm)  `);
        op='| ';
    }
    return result;
}

export default screenSize

// function screenSize () {
//     const formattedSize = inventory.
// }