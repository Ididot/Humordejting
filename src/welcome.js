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
		<div>
		<div>Hej!! Du ska nu göra ett quiz! Fattaru??? Kör!</div>
			<img onClick= {this.onClick} src={"./img/icon/tummenupp.png"}/>
		</div>
	)
}

}

export default Welcome
