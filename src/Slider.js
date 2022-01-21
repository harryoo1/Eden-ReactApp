import React, { useEffect, useState, useContext } from 'react';
import Slider from "@mui/material/Slider";
import { SliderIndexContext } from "./SliderIndexContext";

export default function Slide() {
    const index = useContext(SliderIndexContext);
    const [value, setValue] = useState(index);

    const changeThumb = () => {
        setTimeout(() => setValue(index*5), 0);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Slider
          style={{ maxWidth: 500, color: "#7b68ee" }}
          defaultValue={5}
          value={value}
          onChange={handleChange}
          step={5}
          scale={changeThumb}
          min={1}
          max={20}
        />
    );
  }