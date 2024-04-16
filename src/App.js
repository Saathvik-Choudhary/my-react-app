import './App.css';
import AssetSummary from './AssetSummary'; // Assuming correct import path
import AssetList from './AssetList'; // Assuming correct import path
import SaveAsset from './SaveAsset'; // Assuming correct import path
import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('Home'); // Initial active section

  const handleHomeClick = () => {
    setActiveSection('Home');
  };

  const handleAssetClick = () => {
    setActiveSection('Assets');
  };

  const handleSaveClick = () => {
    setActiveSection('Save');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-heading">
          <p className="heading">A$$ets</p>
        </div>

        <div className="DynamicContainer">
          {activeSection === 'Home' && <AssetSummary />}
          {activeSection === 'Assets' && (
            <>
              <button className="newAsset" onClick={handleSaveClick}>
                <div className="ButtonName">New</div>
              </button>
              <AssetList />
            </>
          )}
          {activeSection === 'Save' && <SaveAsset />}
        </div>

        <div className="StaticContainer">
          <button className="HomeButton" onClick={handleHomeClick}>
            <div className="contents">Home</div>
          </button>

          <button className="AssetsButton" onClick={handleAssetClick}>
            <div className="contents">Assets</div>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
