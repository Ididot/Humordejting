import React from 'react';
import memes from './quiz.json';
import ProgressBar from './progressbar';
import './quiz.css';


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
		this.props.changePage('profile')
	}
}

render(){ 

	console.log(memes)

	let t = this.state.currentImage
	let m = this.state.memeProgression

	return (

		<div class='container_Q'>

			<div class='header_Q'> Quiz </div>
			<ProgressBar class='prog_Q' memeProgression={m}/>

			<div class='meme_Q'>
			<img class='memePic_Q' src={"./img/quiz/"+memes[t].image}/>
			</div>

			<img class='yes_Q' onClick= {this.onClick} src={"./img/icon/tummenupp.png"}/>
			<img class='nope_Q' onClick= {this.onClick} src={"./img/icon/tummenner.png"}/>
			<img class='back_Q' src={"./img/icon/back.png"}/> 
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
