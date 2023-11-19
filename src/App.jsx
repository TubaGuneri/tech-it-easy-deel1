import './App.css';
import countSoldTvs1a from "./helpers/countSoldTvs1a.js";
import countBoughtTvs1c from "./helpers/countBoughtTvs1c.js";
import inSaleTvs1e from "./helpers/inSaleTvs1e.js";
import availableScreenSize from "./helpers/availableScreenSize.js";
import generateTvName from "./helpers/string2a.js";
import priceTv2b from "./helpers/priceTv2b.js";
import checkicon from "./assets/check.png";
import minusicon from "./assets/minus.png";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getTvTypeName from "./helpers deel2/getTvTypeName.js";
import getSoldTvs from "./helpers deel2/getSoldTvs.js";
import listTvsForSport from "./helpers deel2/listTvsForSport.js";
import bigTvs from "./helpers deel2/bigTvs.js";
import tvAmbilight from "./helpers deel2/tvAmbilight.js";
import getFoundTv from "./helpers deel2/getFoundTv.js";
import showAllTvs from "./helpers deel2/showAllTvs.js";
import tvPrices from "./helpers deel2/tvPrices.js";



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
    // noinspection JSVoidFunctionReturnValueUsed

    return (
        <>
     <h1>Tech it easy dashboard</h1>
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
           <img className="best-sold-tv" src = {bestSellingTv.sourceImg} alt= "" />
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
       <div className="buttons">
           <button type="button" onClick={mostSold}>Meest verkocht eerst</button>
           <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
           <button type="button" onClick={sportFirst}>Meest geschikt voor sport eerst</button>
       </div>

       <h2>deel2</h2>
       <h3>opdracht 1a</h3>
       {getTvTypeName()}

       <h3>Opdracht 1b</h3>
       {getSoldTvs()}

       <h3>Opdracht1c</h3>
      {getFoundTv()}

       <h3>Opdracht 1d</h3>
      {listTvsForSport()}

       <h3>Opdracht 1e</h3>
            {bigTvs()}

       <h3>Opdracht 1f</h3>
       {tvAmbilight()}

            <h2>opdracht 2</h2>
            <h3>Opdracht 2a</h3>
<h3>Merken die Tech It Easy heeft</h3>

           <div>
               <ul>
                   {inventory.map((tv) => {
                       return <li key={tv.type}>{tv.brand}</li>
                   })}
               </ul>
           </div>

            <h3>Opdracht 2b</h3>
            <div className='showAllTvs'>
              <h3>{showAllTvs()}</h3>
                <p>{tvPrices()}</p>
                {/*<p>{screenSizes()}</p>*/}

            </div>

            <h3>opdracht 2c</h3>
            <div>
                <ul>
                    {inventory.map((tv, index)=> {
                        if (tv.options.applicable === true) {
                            return <li key={index}>{tv.options.name}</li>;
                        };
                    })}
                </ul>
            </div>

           {/* de rest van deel 2 ontbreekt ivm tijdgebrek.*/}
           </>
  )
}

export default App
