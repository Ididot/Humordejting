//Profile
import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';

//import {StyleSheet, Text, View} from 'react-native';
// How to compare my profile with other profiles.
//import './profile.css';


class Profile extends Component {


    constructor(){
        super(props); //ger this kontexten av dess komponent, inte parents
        this.state = {
            //currentProfile: 0
        }
    this.onClick = this.handleClick.bind(this);
    }

/*
    constructor(){
        super(); //ger this kontexten av dess komponent, inte parents
        this.state = {
            currentProfile: 0
        }
        this.onClick = this.handleClick.bind(this);
    }
*/
/* // Klicka för att byta profil
    handleClick(event){
        this.setState({
                currentProfile: this.state.currentProfile+1
        });
    }

*/

//------------------------------------



    render() {

        const t = this.props.type;

        console.log(profiles_dtb);
        // const t = profiles_dtb[2].type;
        // key={t.profileID}
        // Fixa lista
        // Hämta plats i array från klick i matchlist
        // 
        
        <div key={t.id}>
        /*
        const img = profiles_dtb[2].img;
        const name = profiles_dtb[2].name;
        const bio = profiles_dtb[2].bio;
        const gender = profiles_dtb[2].gender;
        const age = profiles_dtb[2].age;
        const location = profiles_dtb[2].location;
		*/

        let t = profiles_dtb[this.state.currentProfile]

		return (

            <div> 

        	   <h1>Profile</h1>
         
                <div >
         
                <img  onClick= {this.onClick}  src={"./img/./prof/"+profiles_dtb[this.state.currentProfile].img} alt="{t.name}"/>

                <div> Name: {t.name} </div>
                <div> Bio: {t.bio} </div>
                <div> Gender:{t.gender}  </div>
                <div> Age: {t.age} </div>
                <div> Location: {t.location} </div>

            </div>
        
    
        <button onClick= {() => this.setState({currentPage: 'match'}).bind(this)}> 
        Match 
        </button> 

        	</div>

        )
    }  
}
export default Profile;
