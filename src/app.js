import React, { Component } from 'react';
import './app.css';
import Match from './match';
import Profile from './profile';
import Quiz from './quiz';


class App extends Component {
  
//------------------------------------
constructor(props) 
{
  super(props);
  this.state = ({currentPage: 'profile'});

   // This binding is necessary to make `this` work in the callback
  this.changePage = this.changePage.bind(this);
}



 changePage(sida)
 {
  this.setState({currentPage: 'sida'});
 }



//------------------------------------

  render() {
    
    if (this.state.currentPage == 'match') 
    {
      return( <Match/>);
    }
    
    else if (this.state.currentPage == 'profile')
    {
      return (<Profile/>);
    }

    else if (this.state.currentPage == 'quiz')
    {
      return (<Quiz/>);
    }
  }
}
  export default App;
