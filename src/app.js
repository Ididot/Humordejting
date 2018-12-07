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
      this.state = {
        currentPage: 'quiz',
        txt: 'Quiz'
      };

      this.changePage = this.changePage.bind(this);
  }

 changePage(sida)
 {
   this.setState({
      currentPage: sida
    });

 }

  render() {
    
      if (this.state.currentPage == 'quiz') 
      {
        return( <Quiz changePage={this.changePage}/>);
      }
      
      else if(this.state.currentPage == 'profile')
      {
        return( <Profile changePage="sida"/>);
      }
    
      else if (this.state.currentPage == 'match')
      {
        return (<Match/>);
      }
    }
}
  export default App;
