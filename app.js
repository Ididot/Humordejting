import React, { Component } from 'react';
//import types from './types.json';
import './app.css';
import MyProfile from './myProfile';


class App extends Component {
//------------------------------------
  constructor(props) 
    {
      super(props);
      this.state = {currentPage: 'myProfile'};
    }


  changePage(sida) // sida = argument, avgör sidan -----> nav.js
    {
      this.setState({currentPage: sida});
    }

//------------------------------------
  render() {
  //return <navigation/> 

     if (this.state.currentPage == 'myProfile') 
    {
      return(<MyProfile/>);
    }
    
    else if (this.state.currentPage == 'match')
    {
      return (<match/>);
    }

    else if ( this.state.currentPage == 'quizlist')
    {
      return (<quizlist/>);
    }

    }
}
  export default App;


/*



render() {
  return <navigation/>

    //const t = this.props.type;

    if (this.state.currentPage == "sida1") 
    {
      return (<sida1/>);
    }
    
    else if ( currentPage = "sida2")
    {
      return (<sida2/>)
    }


    //console.log(types);

      return <div>
        <h1>STARTPAGE_PROJECT</h1>

        </div>;

}*/
