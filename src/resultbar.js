import React from 'react';
import './resultbar.css';

const barWidth = 100;

const steps = 10;

class ResultBar extends React.Component {

render(){ 

	const matchResult = this.props.matchResult;
    let barWidth = matchResult * steps * 2;
   	const c = {width: barWidth};

    barWidth = Math.min(barWidth, barWidth);
    barWidth = Math.max(barWidth);

		return (
			<div className="result" >
		        <div className="resultBar" style={c} >
		         </div>
	        </div>
		)
	}
}
export default ResultBar