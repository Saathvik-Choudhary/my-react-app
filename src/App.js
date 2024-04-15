import './App.css';
import AssetSummary from './AssetSummary'
import AssetList from "./AssetList"
import CreateNewAsset from "./CreateNewAsset"
import SaveAsset from './SaveAsset';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="App-heading">
          <p children className="heading">A$$ets</p>
        </div>

        <div className="DynamicContainer">
          {/*<AssetSummary/>*/}
          {/*<AssetList/>*/}
          {/*<CreateNewAsset/>*/}
          <SaveAsset/>
        </div>
        
        <div className="StaticContainer">
            <button className="HomeButton">
                <div className="contents">Home</div>
            </button>

            <button className='AssetsButton'>
                <div className="contents">Assets</div>
            </button>
        </div>

        
      </header>
    </div>
  );
}

export default App;
