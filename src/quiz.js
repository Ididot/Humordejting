import React from 'react';
import memes from './meme.json';

class Quiz extends React.Component 

{

constructor(props){
	super(props);
	this.state = {
		currentImage: 0
	}
	this.onClick = this.handleClick.bind(this);
}

handleClick(event){

	if(this.state.currentImage < memes.length-1)
	{
		this.setState({
			currentImage: this.state.currentImage+1
		});
	}
	else
	{
		this.props.changePage('profile')
	}
}

render(){ 

	console.log(memes)

	let t = this.state.currentImage

	return (
		<div>
			<img src={"./img/quiz/"+memes[t].image}/>
			<img onClick= {this.onClick} src={"./img/icon/tummenupp.png"}/>
			<img onClick= {this.onClick} src={"./img/icon/tummenner.png"}/>

		</div>
	)
}


/*
{
	memes.map((meme) => {
		return(
			<div>
				<img src={"./img/quiz/"+meme.image} key={meme.memeID} />
				<div>Bildtext: {meme.bio}</div>
			</div>
		);
	})
}
*/


}

export default Quiz
