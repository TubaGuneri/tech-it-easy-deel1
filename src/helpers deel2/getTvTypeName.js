import {inventory} from "../constants/inventory.js";

function typeNames () {
    const getTvTypeName = inventory.map((tv) => {
        return tv.type;
    });
    console.log(getTvTypeName);
}
export default typeNames;