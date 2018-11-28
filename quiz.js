// Quiz cards


 // GO back knapp: onlick 



import React, { Component } from 'react';
import types from './types.json';
import './quiz.css';


class Quiz extends Component {

    render() {
    
    constructor(props) 
    
    {
      super(props);
      this.state = {currentPage: 'quiz'};
    }


// egen knapp, ej i meny fält
  changePage(sida) // ------> GO BACK to quizlist
    {
      this.setState({currentPage: quizlist}); 
    }


    //console.log(types);

      return <div>
        <h1>QUIZ</h1>

        </div>;

    }  
}
export default Quiz;
