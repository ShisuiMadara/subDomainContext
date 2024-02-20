import React, { useState, createContext } from 'react';
import { stateColor } from '../store/atom1';
import { useRecoilValue } from 'recoil';
export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('');
  selectedColor = useRecoilValue(stateColor)
  console.log(selectedColor)
  console.log("HELLO")

  return(
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};