import React, { Component } from 'react';
import types from './types.json';
import './app.css';

class TypeInfo extends React.Component{

//------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this); // See (*)
  }


  toggleVisibility() {
    this.setState({
      visible: !this.state.visible
    });
  }

//------------------------------------

render() {

    const t = this.props.type;

    if (this.state.visible) {
      return (
        <div key={t.id}>
          <h2>{t.compartment}</h2>
          <MoreTypeInfo key={t.id} type ={t}/>
          <button onClick={this.toggleVisibility}> Show less </button>
        </div>
      );

    } 
    else {
      return(
        <div key={t.id}>
          <h2>{t.compartment}</h2>
          <button onClick={this.toggleVisibility}> Show more </button>
        </div>
      );
    }
  }
}

class MoreTypeInfo extends React.Component{

  render() {

    console.log(types);

    const t = this.props.type;

    return(
      <div key={t.id}>
        <p>Literal description: {t.literalDescription}</p>
        <p>Literal example: {t.literalExample}</p>
      </div>
    )
  }
}

class TypeApp extends Component {

    render() {

    console.log(types);

      return <div>
        <h1>PROJECT</h1>
          {
           types.map((type) => {
            return(<TypeInfo key={type.id} type ={type}/>);
            })
          }
        </div>;
    }  
}
export default TypeApp;
