import React from 'react';
import './profbar.css';
import profiles_dtb from './profiles_dtb.json';
import './profile.css';


class ProfBar extends React.Component {
  render() {

    const matchResult = this.props.matchResult;
    let barWidth = 83 - ((83/profiles_dtb.length)*(matchResult))+'vw';
    const c = {width: barWidth};

    let matchPercent = (((83 - ((83/profiles_dtb.length)*(matchResult)))/83)*100)
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


