import React from 'react';
import './welcome.css';

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
		<div className= 'container_W'>
		<div className = 'text_W'> Welcome to Happ! <br></br> Are you ready <br></br>  to take the quiz?  </div>
			<img className='welcomeButton'onClick= {this.onClick} src={"./img/icon/tummenupp.png"}/>
		</div>
	)
}

}

export default Welcome
