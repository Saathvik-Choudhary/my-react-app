import './AssetSummary.css'

function AssetSummary(){
    return(
        <div className="Summary-Container">
            <div className="AssetCountSummary">
                <div className="content">Asset Count</div>
            </div>

            <div className="CostSummary">
                <div className="content">Cost</div>
            </div>

            <div className="CurrentValueSummary">
                <div className="content">Current Value</div>
            </div>

        </div>
    )
}

export default AssetSummary;