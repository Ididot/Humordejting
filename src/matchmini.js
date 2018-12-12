//Profile
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
    
/*
            <img onClick= {this.onClick} src={"./img/./prof/"+m.img}/>
            <a>Name: {m.name}</a> 

    return(
        <div  class='container_M'> 
        <a>ProfileID: {this.props.profileID}</a>
        <a>bla: {this.state.bla}</a>
          <div class='photo_M'>
              <img onClick= {this.onClick} src={"./img/./prof/"+profiles_dtb[this.props.profileID].img}/>
          </div>
        </div>
    )
*/

} export default MatchMini;

