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
      currentPage: 'welcome'
    };

    this.changePage = this.changePage.bind(this);
    this.select = this.select.bind(this);
  } 

 changePage(sida)
 {
   this.setState({
      currentPage: sida
    });
 }

  select(profileID) {

    console.log(profileID)

    this.setState({
      currentPage: 'profile',
      selected: profileID
    })
  }

  render() {


    
      if (this.state.currentPage == 'welcome') 
      {
        return( <Welcome changePage={this.changePage}/>);
      }

      else if (this.state.currentPage == 'quiz')
      {
        return (<Quiz changePage={this.changePage}/>);
      }

      else if (this.state.currentPage == 'match')
      {
        return (<Match changePage={this.changePage} select={this.select}/>);
      }

      else if(this.state.currentPage == 'profile')
      {
        return( <Profile changePage={this.changePage} profileID={this.state.selected}/>);
      }
            
    }
}
  export default App;
