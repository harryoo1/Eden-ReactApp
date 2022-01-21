import React, {useState} from "react";
import Header from "./Header";
import './Screens.css';
import Slider from "./Slider";
//import {Link, useNavigate } from 'react-router-dom';

export default function Screen1(){
    
    //function onFormSubmitted(e) {
    // const onFormSubmitted = (e) => {
    //     e.preventDefault();
    //     addSubscriberHandler(addSubscriberForm);
    //     setAddSubscriberForm({id: 0, name: '', phone: ''});
    //     navigate('/');
    // }

    return(
        <div>
            <Header />
            <div className="component-body-container">
                <div className="slider"><Slider /></div>
                <div className="">
                    <h2 className="">Welcome! First things first...</h2>
                    <p style={{color: '#a9a9a9', fontSize: '16px'}}>You can always change them later.</p>
                </div>
                <form className="form">
                    <label htmlFor="name" className="label-control">Full Name</label><br/>
                    <input id="fName" type="text" className="input-control" name="fName"/><br/>
                    <label htmlFor="phone" className="label-control">Display Name</label><br/>
                    <input id="dName" type="text" className="input-control" name="dName"/>
                    <button type="submit" className="custom-btn">Create Workspace</button>
                </form>
            </div>
        </div>
    )
}