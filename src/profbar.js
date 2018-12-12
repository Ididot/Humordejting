import React, { Component } from 'react';
import profiles_dtb from './profiles_dtb.json';
import Profbar from './profbar';
import './profile.css';

class Profiles extends React.Component {


    constructor(){
        super(); 
        this.state = {
            matchResult: 20
        }
        this.onClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.changePage('match')
    }
   

    render() {

    const t = profiles_dtb[this.props.profileID]; 
    let m = this.state.matchResult;
    
		return (

            <div className='container_P'> 

                
                <div className='background_P'> </div>

                    <div className='photo_P'>
                    <img className='photo_P' src={"./img/./prof/"+t.img}/>
                    </div>

                    <div className='feather_P'>
                    <img src={"./img/./icon/./feather.png"}/>
                    </div>

                    <div className='globe_P'>
                    <img src={"./img/./icon/./globe.png"}/>
                    </div>

                    

                    <div className='name_P'> {t.name} </div>
                    <div className='bio_P'> Bio: {t.bio} </div>
                    <div className='gender_P'> Gender <br/> {t.gender} </div>
                    <div className='age_P'> Age  <br/> {t.age} </div>
                    <div className='location_P'> Location: {t.location} </div>

                    <div className='profBar_P'>
                    <Profbar  matchResult={m}/>
                    </div>

                    <img onClick= {this.onClick} className='backWhite_P' src={"./img/icon/backWhite.png"}/> 
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
