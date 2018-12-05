import React, { Component } from 'react';
import './match.css';
import App from './app';
import Profile from './profile'

class Match extends Component {

    render() {

    //console.log(types);

      return <div>
        <h1>MATCH</h1>

    <button onClick={() => this.setState({currentPage: 'profile'}).bind(this)}> 
	Profile
	</button> 

        </div>;

    }  
}
export default Match;
