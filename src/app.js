import React from 'react';
import memes from './quiz.json';
import ProgressBar from './progressbar';


class Quiz extends React.Component {

constructor(props){
	super(props);
	this.state = {
		currentImage: 0,
		memeProgression: 0
	}

	this.onClick = this.handleClick.bind(this);
}

handleClick(event){

	if(this.state.currentImage < memes.length-1)
	{
		this.setState({
			currentImage: this.state.currentImage+1,
			memeProgression: this.state.memeProgression+1
		});
	}
	else
	{
		this.props.changePage('match')
	}
}

render(){ 

	console.log(memes)

	let t = this.state.currentImage
	let m = this.state.memeProgression

	return (
		<div>
			<ProgressBar memeProgression={m}/>
			<img onClick= {this.onClick} src={"./img/icon/tummenupp.png"} src={"./img/quiz/"+memes[t].image}/>
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
