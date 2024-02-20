import React, { useContext } from 'react';
// import { ColorContext } from './ColorContext';
import { useRecoilValue } from 'recoil';
import { stateColor } from '../store/atom1';


const Page2 = () => {
  
  const selectedColor  = useRecoilValue(stateColor);
  console.log(selectedColor)
  return (
    <div>
      <div style={{ backgroundColor: selectedColor, width: '200px', height: '200px' }}></div>
    </div>
  );
};

export default Page2;
