import "./SaveAsset.css"

import React, { useState } from 'react';
import axios from "axios";

function SaveAsset(){
    const [formData, setFormData] = useState({
        TitleInput:'',
        CostInput:'',
        DateInput:'',
        DepreceationRate:'', // Initial state for the username field
      });
    
      // Handler function to update form data when input fields change
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handler function to handle form submission
      const handleSubmit = (event) => {
        console.log(formData);         
         
                axios({
                    // Endpoint to send files
                    url: "http://localhost:8080/assets/save",
                    method: "POST",
         
                    // Attaching the form data
                    data: formData,
                })
                    // Handle the response from backend here
                    .then((res) => {})
         
                    // Catch errors if any
                    .catch((err) => {});
            

        setFormData(setFormData);
      };
    
      return (
        
        <form className="SaveContainer" onSubmit={handleSubmit}>

            <button className="SaveButton" type="submit">Save</button>

          <input
            type="text"
            className="Input"
            id="TitleInput"
            name="TitleInput"
            onChange={handleChange}
          />
    

          <input
            className="Input"
            type="text"
            id="CostInput"
            name="CostInput"
            onChange={handleChange}
          />


            <input
            className="Input"
            type="date"
            id="DateInput"
            name="DateInput"
            onChange={handleChange}
          />


                <input
                className="Input"
                type="text"
                id="DepreceationRate"
                name="DepreceationRate"
                onChange={handleChange}
          />

        </form>
      );
      {/*
    return(
        <div className="SaveContainer">
        </div>
    )*/}
}

export default SaveAsset;