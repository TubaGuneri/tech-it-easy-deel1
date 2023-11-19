import {inventory} from "../constants/inventory.js";

function tvsAmbilight () {


    const tvsAmbilight = inventory.filter(tv => tv.options.some(option => option.name === 'ambiLight' && option.applicable === true));
    console.log(tvsAmbilight);
}
export default tvsAmbilight;

