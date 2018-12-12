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

	if(this.state.currentImage < memes.length-20)
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

		<div className='container_Q'>

			<div className='header_Q'> Quiz </div>
			<ProgressBar className='prog_Q' memeProgression={m}/>

			<div className='meme_Q'>
			<img className='memePic_Q' src={"./img/quiz/"+memes[t].image}/>
			</div>

			<img onClick= {this.onClick} className='yes_Q' src={"./img/icon/tummenupp.png"}/>
			<img onClick= {this.onClick} className='nope_Q' src={"./img/icon/tummenner.png"}/>
			<img onClick= {this.onClick} className='back_Q' src={"./img/icon/back.png"}/> 
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
