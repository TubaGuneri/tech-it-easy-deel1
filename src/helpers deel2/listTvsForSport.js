import {inventory} from "../constants/inventory.js";

function listedTvsSport () {
    const tvsSport = inventory.map((tvSport) => {

        if (tvSport.refreshRate >= 100) {
       console.log(`name: ${tvSport.brand} ${tvSport.name} suitable: true`);
    } else {
            console.log(`name: ${tvSport.brand} ${tvSport.name} suitable: false`);
    }
    });
}


export default listedTvsSport;
