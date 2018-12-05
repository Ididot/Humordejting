//quizlist
import React, { Component } from 'react';
import types from './types.json';
import './quizlist.css';


class Quizlist extends Component {

    render() {
    
    constructor(props) 
    
    {
      super(props);
      this.state = {currentPage: 'quizlist'};
    }



  changePage(sida)
    {
      this.setState({currentPage: quiz}); // ------> quiz
    }


    //console.log(types);

      return <div>
        <h1>QUIZLIST</h1>

        </div>;

    }  
}
export default Quizlist;
