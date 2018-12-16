import React from 'react';
import './resultbar.css';
import profiles_dtb from './profiles_dtb.json';

class ResultBar extends React.Component {

  render() {

    const matchResult = this.props.matchResult;
    let barWidth = 19 - ((19/profiles_dtb.length)*(matchResult))+'vw';
   	const c = {width: barWidth};

    return (<div className="result">

	        <div className="resultBar" style={c}>
	    
	        </div>
        </div>

        ); 
  }
}
export default ResultBar
