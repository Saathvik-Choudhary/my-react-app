import React, { useState } from 'react';
import "./SaveAsset.css";

function SaveAsset() {
  const initialFormData = {
    cost: null,
    purchaseDate: null,
    depreciationRate: null,
    title: null
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateNotEmpty = (value) => {
    if (!value || value.trim() === "") {
      return "This field is required";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      const errorMessage = validateNotEmpty(value);
      if (errorMessage) {
        newErrors[key] = errorMessage;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/assets/save", {
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

    setFormData(initialFormData);
  };

  return (
    <form className="SaveContainer" onSubmit={handleSubmit}>
      <button className="SaveButton" type="submit">Save</button>
      <InputField 
        name="title"
        placeholder="Title"
        value={formData.title || ""}
        onChange={handleChange}
        error={errors.title}
      />
      <InputField 
        name="cost"
        placeholder="Cost"
        value={formData.cost || ""}
        onChange={handleChange}
        error={errors.cost}
      />
      <InputField 
        name="purchaseDate"
        placeholder="Purchase Date"
        type="date"
        value={formData.purchaseDate || ""}
        onChange={handleChange}
        error={errors.purchaseDate}
      />
      <InputField 
        name="depreciationRate"
        placeholder="Depreciation Rate"
        value={formData.depreciationRate || ""}
        onChange={handleChange}
        error={errors.depreciationRate}
      />
    </form>
  );
}

const InputField = ({ name, placeholder, type = "text", value, onChange, error }) => (
  <div>
    <input
      type={type}
      className="Input"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="Error">{error}</p>}
  </div>
);

export default SaveAsset;
