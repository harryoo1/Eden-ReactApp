import React, {useState} from 'react';
import slider1 from './slider1.webp';
import './App.css';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { SliderIndexContext } from "./SliderIndexContext";

export default function ControlledCarousel() {

  //const [state, dispatchToSliderIndexReducer] = useReducer(SliderIndexReducer, {index:0});
  const [index, setIndex] = useState(0);

  //const dispatch = useDispatch();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App">
    <SliderIndexContext.Provider value={index}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="slider1">
        <img src={slider1} alt="slider1" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      </Carousel.Item>
      <Carousel.Item className="screens">
        <Screen1 handleSelect={index}/>
      </Carousel.Item>
      <Carousel.Item className="screens">
        <Screen2 />
      </Carousel.Item>
      <Carousel.Item className="screens">
        <Screen3 />
      </Carousel.Item>
      <Carousel.Item className="screens">
        <Screen4 />
      </Carousel.Item>
    </Carousel>
    </SliderIndexContext.Provider>
    </div>
  );
}
