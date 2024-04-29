import './AssetSummary.css'
import { useState, useEffect } from 'react';


function AssetSummary(){
   
    
    const [assetSummary, setAssetSummary] = useState(null);

  useEffect(() => {

        getData();
  }, []);

const getData = () =>{
    fetch('http://localhost:8080/asset/summary')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
         console.log(data);
         setAssetSummary(data);
       })
    }

    return(
        
        <div className="Summary-Container">
            <div className="AssetCountSummary">
            <div className="containere">
                <div className="content">Asset Count</div>

                <div className="contentValue">
                    {assetSummary?.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div></div>
            </div>

            <div className="CostSummary">
            <div className="containere">
                <div className="content">Cost</div>
                
                <div className="contentValue">
                   USD: {assetSummary?.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div></div>
            </div>

            <div className="CurrentValueSummary">
            <div className="containere">
                <div className="content">Current Value</div>

                <div className="contentValue">
                        USD: {assetSummary?.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div></div>
            </div>

        </div>
    )
}

export default AssetSummary;