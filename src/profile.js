//Profile
import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';


class Profiles extends React.Component {


    constructor(){
        super(); 
        this.state = {
            currentProfile: 0
        }
    }

//------------------------------------
/*
    constructor(){
        super(); //ger this kontexten av dess komponent, inte parents
        this.state = {
            currentProfile: 0
        }
        this.onClick = this.handleClick.bind(this);
    }

// Klicka för att byta profil
    handleClick(event){
        this.setState({
                currentProfile: this.state.currentProfile+1
        });
    }

*/
//------------------------------------


    render() {

        console.log(profiles_dtb);

        let t = this.state.currentProfile;

		return (

            <div> 

                <h1>Profile</h1>
              
            {
                profiles_dtb.map((currentProfile) => {
                    return (

                            <div>

                                <img   src={"./img/./prof/"+currentProfile.img} key="{currentProfile.profileID}"/>

                                <div> Name: {currentProfile.name} </div>
                                <div> Bio: {currentProfile.bio} </div>
                                <div> Gender:{currentProfile.gender} </div>
                                <div> Age: {currentProfile.age} </div>
                                <div> Location: {currentProfile.location} </div>

                            </div>
                    );
                })
            }


            </div> 
        );
    }  
} export default Profiles ;


