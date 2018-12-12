import React from 'react';
import './progressbar.css';

const barWidth = 10;

const pixelsPerDegree = 16;

class ProgressBar extends React.Component {

render(){ 

	const memeProgression = this.props.memeProgression;
    let barWidth = memeProgression * pixelsPerDegree;
   	const c = {width: barWidth};

    barWidth = Math.min(barWidth, barWidth);
    barWidth = Math.max(barWidth);

	return (
		<div className="progress">
	        <div className="progressBar" style={c}>
	            {memeProgression}
	         </div>
        </div>
	)
}

}

export default ProgressBar
