import React from 'react';
import './profbar.css';

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
}
export default ProfBar