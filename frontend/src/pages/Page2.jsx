import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const Page2 = () => {
  const { selectedColor } = useContext(ColorContext);

  return (
    <div>
      <h1>Page 2</h1>
      <div style={{ backgroundColor: selectedColor, width: '200px', height: '200px' }}></div>
    </div>
  );
};

export default Page2;
