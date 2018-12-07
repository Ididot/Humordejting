//Profile
import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';
import Profile from './profile.js';
import './match.css'




class Match extends React.Component {


    constructor(){
        super(); 
        this.state = {
            currentProfile: 0
        };
    }


    render() {


        console.log(profiles_dtb);
        let ID = 4; // testgrej

		return (
         

            <div  class='container_M'> 

                 <div class='header_M'> Match </div>
                <p> ID-nummer: {profiles_dtb[ID].profileID} </p> 
            {
                profiles_dtb.map((currentProfile) => {
                    return (

                            <div>

                                <div class='photo_M'>
                                <img src={"./img/./prof/"+currentProfile.img} key="{currentProfile.profileID}"/>
                                </div>

                                <div class='name_M'> Name: {currentProfile.name} </div>
                                <div class='bio_M'> Bio: {currentProfile.bio} </div>
                                <div class='gender_M'> Gender:{currentProfile.gender} </div>
                                <div class='age_M'> Age: {currentProfile.age} </div>
                                <div class='location_M'> Location: {currentProfile.location} </div>

                            </div>
                    );

                })
            }

            </div>

        );

    }  
} export default Match;

