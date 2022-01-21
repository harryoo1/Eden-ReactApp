import React, {useState} from "react";
import Header from "./Header";
import './Screens.css';
//import {Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import Slider from "./Slider";

export default function Screen3(){

    return(
        <div>
            <Header />
            <div className="component-body-container">
            <div className="slider"><Slider /></div>
                <div className="">
                    <h2 className="">How are you planning to use Eden ? </h2>
                    <p style={{color: '#a9a9a9', fontSize: '16px'}}>We'll streamline your step experience accordingly.</p>
                </div>
                <div className="card-form">
                <Card style={{ width: '10rem', float: 'left', margin: '10px 20px' }}>
                    <FaUserAlt style={{ color: '#7b68ee', fontSize: '30px', marginLeft: '20px', marginTop: '20px' }}/>
                    <Card.Body>
                        <Card.Title style={{color: '#696969', fontSize: '16px', textAlign: 'left'}}>For Myself</Card.Title>
                        <Card.Text style={{color: '#a9a9a9', fontSize: '14px', textAlign: 'left'}}>Write better, Think more clearly, stay oorganized.</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '10rem', margin: '10px 20px' }}>
                    <FaUserFriends style={{ color: '#7b68ee', fontSize: '30px', marginLeft: '20px', marginTop: '20px' }}/>
                    <Card.Body>
                        <Card.Title style={{color: '#696969', fontSize: '16px',textAlign: 'left'}}>With my team</Card.Title>
                        <Card.Text style={{color: '#a9a9a9', fontSize: '14px', textAlign: 'left'}}>Wikis, Docs, tasks and projects, all in one place.</Card.Text>
                    </Card.Body>
                </Card>
                    <button type="submit" className="custom-btn">Create Workspace</button>
                </div>
            </div>
        </div>
    )
}