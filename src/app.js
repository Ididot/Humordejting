import React, { Component } from 'react';
import './app.css';
import Match from './match';
import Profile from './profile';
//import Nav from './nav';



class App extends Component {
//------------------------------------
  constructor(props) 
    {
      super(props);
      this.state = ({currentPage: 'profile'});
    }


 changePage(sida)
    {
      this.setState({currentPage: sida});
   
  
    }


//------------------------------------



  render() {
      

    //return( <Nav/>)
      

     if (this.state.currentPage == 'profile') 
    {
      return( <Profile changePage="??"/>);
    }
    
    else if (this.state.currentPage == 'match')
    {
      return (<Match/>);
    }


    }
}
  export default App;
