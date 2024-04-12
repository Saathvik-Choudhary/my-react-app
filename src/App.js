import './App.css';
import AssetSummary from './AssetSummary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="App-heading">
          <p children className="heading">A$$ets</p>
        </div>

        <div className="DynamicContainer">
          <AssetSummary/>
        </div>
        
        <div className="StaticContainer">
            <div className="HomeButton">
                <div >Home</div>
            </div>

            <div className='AssetsButton'>
                <div >Assets</div>
            </div>
        </div>

        
      </header>
    </div>
  );
}

export default App;
