//Profile
import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';
import './profile.css' 
//https://medium.com/deemaze-software/css-grid-layout-crossed-sections-fca9e956e725
//https://medium.com/deemaze-software/css-grid-responsive-layouts-and-components-eee1badd5a2f


class Profiles extends React.Component {


    constructor(){
        super(); //ger this kontexten av dess komponent, inte parents
        this.state = {
            currentProfile: 0 // Värdet påverkar vilken profil som visas
        }
    }


   
   //FÅ ID FRÅN MATCH

    render() {


    console.log(profiles_dtb);


    const t = profiles_dtb[this.state.currentProfile]; // Värdet från constructor avgör profilen
    

    // Kommentera bort "const t" ovan för att använda denna kod ist.
    /*
    // ID = 4; 
    //const t = profiles_dtb[ID];
    */

		return (

            <div class='container_P'> 

                <div class='header_P'> {t.name}'s Profile </div>
              

                    <div class='photo_P'>
                    <img  src={"./img/./prof/"+t.img} key="{currentProfile.profileID}"/>
                    </div>

                    <div class='name_P'> Name: {t.name} </div>
                    <div class='bio_P'> Bio: {t.bio} </div>
                    <div class='gender_P'> Gender:{t.gender} </div>
                    <div class='age_P'> Age: {t.age} </div>
                    <div class='location_P'> Location: {t.location} </div>

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
