import React, { Component } from 'react';
import profiles_dtb from './profiles_dtb.json';
import Profbar from './profbar';
import './profile.css' 

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
                <div className='background2_P'> </div>

                    <div className='photo_P'>
                    <img className='photo_P' src={"./img/./prof/" + t.img}/>
                    </div>

                    <div className='feather_P'>
                    <img src={"./img/./icon/./feather.png"}/>
                    </div>

                    <div className='globe_P'>
                    <img src={"./img/./icon/./globe.png"}/>
                    </div>

                    <div className='genders_P'>
                    <img src={"./img/./icon/./genders.png"}/>
                    </div>

                    <div className='ageIcon_P'>
                    <img src={"./img/./icon/./age.png"}/>
                    </div>

                    <div className='name_P'> {t.name} </div>
                    <div className='bio_P'> <b>Bio:</b> {t.bio} </div>
                    <div className='gender_P'> <b>Gender:</b> {t.gender} </div>
                    <div className='age_P'> <b>Age:</b> {t.age} </div>
                    <div className='location_P'> <b>Location:</b> {t.location} </div>

                    <div className='profBar_P'>
                    <p className='yourMatch'>73% match:</p>
                    <Profbar  matchResult={m}/>
                    </div>

                    <img onClick= {this.onClick} className='backWhite_P' src={"./img/icon/backWhite.png"}/> 

            </div> 
        );
    }  
} export default Profiles; 
