import "./AssetList.css"; // Assuming correct import path for styles

function AssetList({ title = "", purchaseDate = "", cost = 0, depreciationRate = 0 ,depreciatedValue=0 , i=0}) {
    
    function formatYearsMonths(purchaseDate) {
        const currentDate = new Date();
        const date = new Date(purchaseDate);
        const diffInMonths = (currentDate.getFullYear() - date.getFullYear()) * 12 + (currentDate.getMonth() - date.getMonth());
      
        const years = Math.floor(diffInMonths / 12);
        const months = diffInMonths % 12;
      
        let result = '';
        result += years + 'y ';    
        result += months + 'm';

        return result.trim();
    }

  return (
    <div className="assetListContainer" >
      <div className={i % 2 === 0 ? "evenRow" : "oddRow"}>
        <div className="assetTitle">{title}</div>
        <div className="assetDetails">
          <div className="details">{formatYearsMonths(purchaseDate)}</div>
          <div className="details">{depreciationRate}%</div>
          <div className="details"><span style={{ fontSize: '2vh' }}>USD:</span> {cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
          <div className="details"><span style={{ fontSize: '2vh' }}>USD:</span>  {depreciatedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>

        </div>
      </div>
    </div>
  );
}

export default AssetList;
