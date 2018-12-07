import React, { Component } from 'react';
import './app.css';
import Match from './match';
import Profile from './profile';
import Quiz from './quiz';
import Welcome from './welcome';


class App extends Component {
  
//------------------------------------
  constructor(props) 
  {
      super(props);
      this.state = {
        currentPage: 'welcome',
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
        return (<Match changePage={this.changePage}/>);
      }
      else if (this.state.currentPage == 'welcome')
      {
        return (<Welcome changePage={this.changePage}/>);
      }
    }
}
  export default App;
