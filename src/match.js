import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';
import Profile from './profile.js';
import MatchMini from './matchmini.js';
import ResultBar from './resultbar';
import './match.css'




class Match extends React.Component {


    constructor(){
        super(); 
        this.state = {
        }

        this.backClick = this.backClick.bind(this);
    }

    backClick(){

        this.props.changePage('quiz')
}



    render() {


        //console.log(profiles_dtb);
      
		return (
         
            <div  className='container_M'> 

                 <div className='header_M'> Matches </div>
                 
                 <div className='back_M'>
                 <img onClick= {this.backClick} className='back_M' src={"./img/icon/backQuiz.png"}/> 
                 </div>
                {
                profiles_dtb.map((currentProfile) => {

                    return (

                            <div>

                                <div className='photo_M'>
                                <MatchMini key={currentProfile.profileID} profileID={currentProfile.profileID} select={this.props.select}/>
                                </div>
                                
                                <div  className='prog_M'>
                                    <ResultBar matchResult={currentProfile.profileID}/>
                                </div>

                            </div>
                    );

                })
            }

            </div>
        );

    }  
} export default Match;

