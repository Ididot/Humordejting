//Profile
import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';
import Profile from './profile.js';
import './match.css'
import ResultBar from './resultbar';




class Match extends React.Component {


    constructor(){
        super(); 
        this.state = {
            currentProfile: 0,
            matchResult: 6
        };
    }


    render() {


        console.log(profiles_dtb);
        let m = this.state.matchResult;
      
		return (
         

            <div  class='container_M'> 

                 <div class='header_M'> Match </div>
            
            {
                profiles_dtb.map((currentProfile) => {
                    return (

                            <div>

                                <div class='photo_M'>
                                <img class='photo_M' src={"./img/./prof/"+currentProfile.img} key="{currentProfile.profileID}"/>
                                </div>

                                <div  class='prog_M'>
                                <ResultBar matchResult={m--}/>
                                </div>
                            </div>
                    );

                })
            }



            </div>

        );

    }  
} export default Match;








