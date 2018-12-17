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
		<div className = 'text_W'> Welcome to Happ! <br></br>
		<p className='explain_W'> Upon proceeding you will be taken to our quiz, where you will react to the different images with either a "like" or a "dislike". Afterwards, you will be matched with other users based on mutual humor. <br></br>
		<p className='ready_W'> Ready to roll?
		</p>
		</p>
		</div>
			<img className='welcomeButton'onClick= {this.onClick} src={"./img/icon/tummenupp.png"}/>
		</div>
	)
}

}

export default Welcome
