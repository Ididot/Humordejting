//Profile
import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';
import './profile.css';
import Profbar from './profbar';
//https://medium.com/deemaze-software/css-grid-layout-crossed-sections-fca9e956e725
//https://medium.com/deemaze-software/css-grid-responsive-layouts-and-components-eee1badd5a2f


class Profiles extends React.Component {


    constructor(){
        super(); 
        this.state = {
            currentProfile:0,
            matchResult: 20
        }
    }


   


    render() {


    console.log(profiles_dtb);

    let m = this.state.matchResult;

    const t = profiles_dtb[this.state.currentProfile]; 
    
		return (

            <div class='container_P'> 

                

                    <div class='photo_P'>
                    <img class='photo_P' src={"./img/./prof/"+t.img} key="{currentProfile.profileID}"/>
                    </div>

                    <div class='background_P'> </div>
                    <div class='background2_P'> </div>

                    <div class='name_P'> {t.name} </div>

                    
                    <div class='feather_P'>
                    <img src={"./img/./icon/./feather.png"}/>
                    </div>
                    <div class='bio_P'> Bio: {t.bio} </div>


                    <div class='gender_P'> Gender <br/> {t.gender} </div>
                    <div class='age_P'> Age  <br/> {t.age} </div>

                    <div class='globe_P'>
                    <img src={"./img/./icon/./globe.png"}/>
                    </div>

                    <div class='location_P'> Location: {t.location} </div>

                    <div class='profBar_P'>
                    <Profbar  matchResult={m}/>
                    </div>

                    <img class='backWhite_P' src={"./img/icon/backWhite.png"}/> 

            </div> 
        );
    }  
} export default Profiles;



    
/*
    // Gammal kod. Ta ej bort, använder den som referens.
    let ID = 2;

    const img = profiles_dtb[ID].img
    const name = profiles_dtb[ID].name
    const bio = profiles_dtb[ID].bio
    const gender = profiles_dtb[ID].gender
    const age = profiles_dtb[ID].age
    const location = profiles_dtb[ID].location
    */