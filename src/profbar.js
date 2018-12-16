import React from 'react';
import './profbar.css';
import profiles_dtb from './profiles_dtb.json';

class ProfBar extends React.Component {
  render() {

    const matchResult = this.props.matchResult;
    let barWidth = 88 - ((88/profiles_dtb.length)*(matchResult))+'vw';
    const c = {width: barWidth};

    let matchPercent = (((88 - ((88/profiles_dtb.length)*(matchResult)))/88)*100)
    var fixed = matchPercent.toFixed(0);

    return (

        <div>
            <p className='yourMatch'>{fixed}% match:</p>

            <div className="bar">

                <div className="profbar" style={c}></div>

            </div>
        </div>

        ); 
  }

}
export default ProfBar

/*
const barWidth = 100;

const steps = 10;

class ProfBar extends React.Component {

render(){ 

    const matchResult = this.props.matchResult;
    let barWidth = matchResult * steps * 2;
    const c = {width: barWidth};

    barWidth = Math.min(barWidth, barWidth);
    barWidth = Math.max(barWidth);

        return (
            <div className="bar" >
                <div className="profbar" style={c} >
                 </div>
            </div>
        )
    }
*/
