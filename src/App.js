import './App.css';
import AssetSummary from './AssetSummary'; // Assuming correct import path
import AssetList from './AssetList'; // Assuming correct import path
import SaveAsset from './SaveAsset'; // Assuming correct import path
import React, { useState,useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('Home'); // Initial active section

  const handleSaveClick = () => {
    setActiveSection('Save');
  };

  const [isButtonClicked, setIsButtonClicked] = useState(false); // Button state

  const buttonStyle1 = isButtonClicked ? { backgroundColor: '#45474B' } : {backgroundColor:'#000'};

  const buttonStyle2 = isButtonClicked ? { backgroundColor: '#000' } : {backgroundColor: '#45474B'};


  const handleHomeClick = () => {
    setActiveSection('Home');
    setIsButtonClicked(!isButtonClicked); // Toggle state on click
  };

  const handleAssetClick = () => {
    setActiveSection('Assets');
    setIsButtonClicked(!isButtonClicked); // Toggle state on click
    getAssetList();
  };

  const [list, setAssetList] = useState([]);

  useEffect(() => {
        getAssetList();
  }, []);

const getAssetList = () =>{
    fetch('http://localhost:8080/asset/all')
    .then((res) => {
        return res.json();
    })
    .then((response) => {
         console.log(response);
         setAssetList(response.content);
       })
    }

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
              {
                /*  This maps each array item to a div adds
                the style declared above and return it */
                list.map((item,index) => (
                  <AssetList key={index} 
                        title={item.title} 
                        purchaseDate = {item.purchaseDate} 
                        cost ={item.cost} 
                        depreciationRate = {item.depreciationRate} 
                        currentValue={item.currentValue}
                        i={index}/>
                ))
            }
              
            </>
          )}
          {activeSection === 'Save' && <SaveAsset />}
        </div>
        
        <div className="StaticContainer">
          <button style={buttonStyle1} className="HomeButton" onClick={handleHomeClick}>
            <div className="contents">Home</div>
          </button>

          <button style={buttonStyle2} className="AssetsButton" onClick={handleAssetClick}>
            <div className="contents">Assets</div>
          </button>
        </div>
      </header>

    </div>
  );
}

export default App;
