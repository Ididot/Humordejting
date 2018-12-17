import React from 'react';
import './progressbar.css';
import memes from './quiz.json'; //memes.length

class ProgressBar extends React.Component {

  render() {

    const memeProgression = this.props.memeProgression;
    let barWidth = (67/memes.length)*(memeProgression+1)+'vw';
   	const c = {width: barWidth};

    return (<div className="progress">

	        <div className="progressBar" style={c}>
	    	{memeProgression+1}
	        </div>
        </div>

        ); 
  }
}

export default ProgressBar

