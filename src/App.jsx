import './App.css';
import countSoldTvs1a from "./helpers/countSoldTvs1a.js";
import countBoughtTvs1c from "./helpers/countBoughtTvs1c.js";
import inSaleTvs1e from "./helpers/inSaleTvs1e.js";
import availableScreenSize from "./helpers/availableScreenSize.js";
import generateTvName from "./helpers/string2a.js";
import priceTv2b from "./helpers/priceTv2b.js";
import bestSeller from "./assets/screenshots/tech-it-easy-best-seller-tv.jpeg";
import checkicon from "./assets/check.png";
import minusicon from "./assets/minus.png";

function App() {
    function mostSold () {
        console.log('Meest verkocht eerst');
    }
    function cheapestFirst() {
        console.log('Goedkoopste eerst');
    }
  function sportFirst() {
      console.log('Meest geschikt voor sport eerst');
  }
    return (
   <>
     <h1>Tech it easy dashbord</h1>

           <h2>Verkoopoverzicht</h2>
           <article className="sale-summary">
               <div>
                   <p className="sold-tvs">Aantal verkochte producten {countSoldTvs1a()}</p>
               </div>
               <div>
                   <p className="bought-tvs">Aantal ingekochte producten {countBoughtTvs1c()}</p>
               </div>
               <div>
                   <p className="to-sell-tvs">Aantal te verkopen producten {inSaleTvs1e()}</p>
               </div>

           </article>
       <h2>Best verkochte tv</h2>
       <article className="outer-best-seller-tv">
       <div className= "inner-best-seller-tv-img">
           <img className="best-sold-tv" src = {bestSeller} alt= "" />
       </div>
           <div className= "inner-best-seller-tv">
               <h3 className="tv-name">{generateTvName()}</h3>
               <p className="price">{priceTv2b()}</p>
               <p className="screen-size">{availableScreenSize()}</p>
              <img className="check-icon" src={checkicon} alt=''/>  wifi
              <img className= "minus" src={minusicon} alt=''/>  speech
               <img className= "check-icon" src={checkicon} alt=''/>  hdr
               <img className= "check-icon" src={checkicon} alt=''/>  bluetooth
               <img className= "minus" src={minusicon} alt=''/>  ambilight
           </div>
       </article>
       <div style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
           <button type="button" onClick={mostSold}>Meest verkocht eerst</button>
           <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
           <button type="button" onClick={sportFirst}>Meest geschikt voor sport eerst</button>
       </div>
   </>
  )
}

export default App
