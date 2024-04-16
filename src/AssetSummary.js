import './AssetSummary.css'
import { useState, useEffect } from 'react';


function AssetSummary(){
   
    
    const [assetSummary, setAssetSummary] = useState(null);

  useEffect(() => {

        getData();
  }, []);

const getData = () =>{
    fetch('http://localhost:8080/assets/assetSummary')
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
                <div className="content">Asset Count</div>
                <div className="content">
                    {assetSummary?.count}
                </div>
            </div>

            <div className="CostSummary">
                <div className="content">Cost</div>
                <div className="content">
                    {assetSummary?.cost}
                </div>
            </div>

            <div className="CurrentValueSummary">
                <div className="content">Current Value</div>
                <div className="content">
                    {assetSummary?.value}
                </div>
            </div>

        </div>
    )
}

export default AssetSummary;