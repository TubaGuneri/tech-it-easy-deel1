import {inventory} from "../constants/inventory.js";


function getFoundTv () {
 const specificTv= inventory.find((tv) => {
   return tv.type === 'NH3216SMART';
 });

  console.log(specificTv);
}
export default getFoundTv;