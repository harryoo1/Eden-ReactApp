import React, {useState} from "react";
import Header from "./Header";
import './Screens.css';
//import {Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Slider from "./Slider";

export default function Screen2(){

    return(
        <div>
            <Header />
            <div className="component-body-container">
            <div className="slider"><Slider /></div>
                <div className="">
                    <h2 className="">Let's setup a home for all your work</h2>
                    <p style={{color: '#a9a9a9', fontSize: '16px'}}>You can always crete another workspace later.</p>
                </div>
                <form className="form">
                    <label htmlFor="name" className="label-control">Workspace Name</label><br/>
                    <input id="fName" type="text" className="input-control" name="fName"/><br/>
                    {/* <label htmlFor="phone" className="label-control">Display Name</label><br/>
                    <input id="dName" type="text" className="input-control" name="dName"/> */}
                    <Form.Label htmlFor="basic-url" className="label-control">Workspace URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">www.eden.com/</InputGroup.Text>
                        <FormControl style={{border: '1px solid rgb(233, 233, 233)', padding: '10px 15px'}} id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <button type="submit" className="custom-btn">Create Workspace</button>
                </form>
            </div>
        </div>
    )
}