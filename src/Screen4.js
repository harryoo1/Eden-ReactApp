import React, {useState} from "react";
import Header from "./Header";
import './Screens.css';
//import {Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Slider from "./Slider";

export default function Screen4(){

    return(
        <div>
            <Header />
            <div className="component-body-container">
            <div className="slider"><Slider /></div>
                <FaCheckCircle style={{ color: '#7b68ee', fontSize: '70px', margin: '20px'}}/>
                <div className="">
                    <h2 className="">Congratulations, Eren!</h2>
                    <p style={{color: '#a9a9a9', fontSize: '16px'}}>You have completed onboarding, you can start using the Eden!</p>
                </div>
                <div className="card-form">
                    <button type="submit" className="custom-btn">Launch Eden</button>
                </div>
            </div>
        </div>
    )
}