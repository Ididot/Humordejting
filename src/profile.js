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

                                <img src={"./img/./prof/"+currentProfile.img} key="{currentProfile.profileID}"/>

                                <div> Name: {currentProfile.name} </div>
                                <div> Bio: {currentProfile.bio} </div>
                                <div> Gender:{currentProfile.gender} </div>
                                <div> Age: {currentProfile.age} </div>
                                <div> Location: {currentProfile.location} </div>

                            </div>
                    );
                })
            }

            <button onClick={() => this.setState({currentPage: 'match'}).bind(this)}> 
            match
            </button> 

            </div> 
        );
    }  
} export default Profiles;
