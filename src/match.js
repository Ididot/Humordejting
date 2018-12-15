import React, { Component } from 'react';
import App from './app';
import profiles_dtb from './profiles_dtb.json';
import Profile from './profile.js';
import MatchMini from './matchmini.js';
import ResultBar from './resultbar';
import './match.css';
import './quiz.css';



class Match extends React.Component {


    constructor(){
        super(); 
        this.state = {
            matchResult: 6 //NN - kopplar med resultbar (~line 49)
        };
        this.backClick = this.backClick.bind(this);
    }

    backClick(){
        this.props.changePage('quiz')
    }

    render() {


        //console.log(profiles_dtb);
        let m = this.state.matchResult; //NN
      
		return (
         
            <div  className='container_M'> 

		<img onClick= {this.backClick} className='back_Q' src={"./img/icon/back.png"}/> 

                 <div className='header_M'> Match </div>
            
                {
                profiles_dtb.map((currentProfile) => {

                    return (

                            <div>

                                <div className='photo_M'>
                                <MatchMini key={currentProfile.profileID} profileID={currentProfile.profileID} select={this.props.select}/>
                                </div>

                                <div  className='prog_M'>
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
