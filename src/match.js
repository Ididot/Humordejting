import React, { Component } from 'react';
import profiles_dtb from './profiles_dtb.json';
import Profile from './profile.js';
import MatchMini from './matchmini.js';
import './match.css'

class Match extends React.Component {


constructor(){
    super(); 
    this.state = {
    };
}

render() {

    return (

        <div className='container_M'> 

            <div className='header_M'> Match </div>

            {
            profiles_dtb.map((currentProfile) => {
                return <MatchMini key={currentProfile.profileID} profileID={currentProfile.profileID} select={this.props.select}/>})
            }

        </div>
    );
}  

} export default Match;

