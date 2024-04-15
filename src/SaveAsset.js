import "./SaveAsset.css"

import React, { useState } from 'react';


function SaveAsset(){
    const [formData, setFormData] = useState({
        username: '', // Initial state for the username field
        password: '', // Initial state for the password field
      });
    
      // Handler function to update form data when input fields change
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handler function to handle form submission
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Do something with the form data, e.g., send it to a server
        console.log(formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="TitleInput"
            id="TitleInput"
            name="TitleInput"
            value={"Title (e.g., LG 34' OLED Monitor"}
            onChange={handleChange}
          />
    
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
    
          <button type="submit">Submit</button>
        </form>
      );
      {/*
    return(
        <div className="SaveContainer">
        </div>
    )*/}
}

export default SaveAsset;