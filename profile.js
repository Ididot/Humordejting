import React, { Component } from 'react';
import profiles_dtb from './profiles_dtb.json';
import './profile.css' 

class Profiles extends React.Component {

    constructor(){
        super(); 
        this.state = {
        }
        this.onClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.changePage('match')
    }

    render() {

    const t = profiles_dtb[this.props.profileID]; 

		return (

            <div className='container_P'> 

                <div className='header_P'> {t.name}'s Profile </div>

                    <div className='photo_P'>
                        <img  src={"./img/./prof/"+t.img}/>
                    </div>

                    <div className='name_P'> Name: {t.name} </div>
                    <div className='bio_P'> Bio: {t.bio} </div>
                    <div className='gender_P'> Gender:{t.gender} </div>
                    <div className='age_P'> Age: {t.age} </div>
                    <div className='location_P'> Location: {t.location} </div>

                    <img onClick= {this.onClick} src={"./img/icon/tummenner.png"}/>

            </div> 
        );
    }  
} export default Profiles; 
