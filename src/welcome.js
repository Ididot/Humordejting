import React from 'react';

class Welcome extends React.Component {

constructor(props){
	super(props);
	this.state = {
	}

	this.onClick = this.handleClick.bind(this);
}

handleClick(event){
		this.props.changePage('quiz')
}

render(){ 

	return (
		<div className="welcome_bg">
		<div className="welcome_txt">Welcome to Happ! You will be doing a quiz</div>
			<img onClick= {this.onClick} className="arrow" src={"./img/icon/tummenupp.png"}/>
		</div>
	)
}

}

export default Welcome
