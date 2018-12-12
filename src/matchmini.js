import React, { Component } from 'react';
import profiles_dtb from './profiles_dtb.json';
import Profile from './profile.js';
import Match from './match.js';
import './match.css'

class MatchMini extends React.Component {


constructor(props){
    super(props); 
    this.state = {
    };

    this.selectThis = this.selectThis.bind(this);
}

selectThis(){
    this.props.select(this.props.profileID);
} 

render() {

    let m = profiles_dtb[this.props.profileID]

    return(
        <div> 

            <a>{this.props.profileID}</a>
            <img onClick={this.selectThis} src={"./img/./prof/"+m.img}/>

        </div>
    )
    
}  

} export default MatchMini;

