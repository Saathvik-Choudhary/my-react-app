import "./AssetList.css"; // Assuming correct import path for styles

function AssetList({ title = "", purchaseDate = "", cost = 0, depreciationRate = 0 }) {
  return (
    <div className="assetListContainer">
      <div className="assetContainer">
        <div className="assetTitle">{title}</div>
        <div className="assetDetails">
          <div className="details">{purchaseDate}</div>
          <div className="details">{cost}</div>
          <div className="details">{depreciationRate}</div>
          <div className="details">details4</div>
        </div>
      </div>
    </div>
  );
}

export default AssetList;
