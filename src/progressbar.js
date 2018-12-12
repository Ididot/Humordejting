import React from 'react';
import './progressbar.css';

const barHeight = 200;
const maxTemperature = 30;
const minTemperature = -10;

const temperatureSpan = maxTemperature - minTemperature;
const pixelsPerDegree = barHeight / temperatureSpan;

class ProgressBar extends React.Component {

render(){ 

	const memeProgression = this.props.memeProgression;
    let barHeight = (memeProgression - minTemperature) * pixelsPerDegree;
   	const c = {height: barHeight};

    barHeight = Math.min(barHeight, barHeight - 10);
    barHeight = Math.max(barHeight, 20);

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
