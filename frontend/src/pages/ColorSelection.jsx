import React, { useState } from 'react';

const ColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [subDomainName, setsubDomainName] = useState('')

  const handleColorSelect = () => {
    window.sessionStorage.setItem("color", selectedColor)
  };

  const handleSubDomainSelect = () => {
    console.log("hi")
  }

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSubDomainNameChange =(e) => {
    setsubDomainName(e.target.value)
  }

  return (
    <div>
    <div>
       <h1>Select a Color</h1>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <button onClick={handleColorSelect}>Select Color</button>
    </div>

    <div>
      <h1>Select subdomain</h1>
      <input type='text' value={subDomainName} onChange={handleSubDomainNameChange} />
      <button onClick={handleSubDomainSelect}>Select Domain</button>
    </div>
    </div>
  );
};

export default ColorSelection;
