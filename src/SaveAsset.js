import React, { useState } from 'react';

import "./SaveAsset.css";

function SaveAsset() {
  const [formData, setFormData] = useState({
    cost: null,
    purchaseDate: null,
    depreciationRate: null,
    title: null
  });

  // Handler function to update form data when input fields change
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const response = await fetch("http://localhost:8080/assets/save",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error sending data:', error);
    }
    
    // Reset form data after submission
    setFormData({
      title: null,
      cost: null,
      purchaseDate: null,
      depreciationRate: null,
    });
  };

  return (
    <form className="SaveContainer" onSubmit={handleSubmit}>
      <button className="SaveButton" type="submit">Save</button>
      <input
        type="text"
        className="Input"
        id="title"
        name="title"
        placeholder="Title"
        value={formData.title || ""}
        onChange={handleChange}
      />
      <input
        className="Input"
        type="text"
        id="cost"
        name="cost"
        placeholder="Cost"
        value={formData.cost || ""}
        onChange={handleChange}
      />
      <input
        className="Input"
        type="Date"
        id="purchaseDate"
        name="purchaseDate"
        value={formData.purchaseDate || ""}
        onChange={handleChange}
      />
      <input
        className="Input"
        type="text"
        id="depreciationRate"
        name="depreciationRate"
        placeholder="Depreciation Rate"
        value={formData.depreciationRate || ""}
        onChange={handleChange}
      />
    </form>
  );
}

export default SaveAsset;
