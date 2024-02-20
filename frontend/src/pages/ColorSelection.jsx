import React, { useState } from 'react';
import { useEffect } from "react";
import persist from 'persist-js';
import { useLocation } from 'react-router-dom';
import { RecoilRoot, useRecoilState } from 'recoil';
import {stateColor} from "../store/atom1";
import { flushSync } from 'react-dom';

const ColorSelection = () => {
  const [selectedColor, setSelectedColor] = useRecoilState(stateColor);
  const [subDomainName, setsubDomainName] = useState('')
  const [color, setColor] = useState();
  // const location = useLocation();

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);




  useEffect(() => {
		const host = window.location.host; // gets the full domain of the app

		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
		if (arr.length > 0) setsubDomainName(arr[0]);
	}, [])

  const handleColorSelect = (e) => {

    flushSync(() => {
    setSelectedColor(color)
    })
    console.log(e.target)
    console.log(selectedColor)
  };

  const handleSubDomainSelect = () => {
    const lnk = window.location.protocol +
									"//" +
									subDomainName +
									"." +
									window.location.host + "/Page2"

    window.open(lnk, '_blank');

  }

  const handleColorChange = (e) => {
    // console.log(e.target.value)

      const socket = io('http://localhost:3000');
      socket.emit('message', 'Hello from client');

    flushSync(() => {
    setColor(e.target.value)
    setSelectedColor(e.target.value);
    })
  };

  const handleSubDomainNameChange =(e) => {
    setsubDomainName(e.target.value)
  }

  return (
    <RecoilRoot>
      <div>
      <div>
        <h1>Select a Color</h1>
        <input type="color" value={color} onChange={handleColorChange} />
        <button onClick={handleColorSelect}>Select Color</button>
      </div>

      <div>
        <h1>Select subdomain</h1>
        <input type='text' value={subDomainName} onChange={handleSubDomainNameChange} />
        <button onClick={handleSubDomainSelect}>Select Domain</button>
      </div>
      </div>
    </RecoilRoot>

  );
};


export default ColorSelection;
