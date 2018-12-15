import React from 'react';
import memes from './quiz.json';
import ProgressBar from './progressbar';
import './quiz.css';


class Quiz extends React.Component {

constructor(props){
	super(props);
	this.state = {
		memeProgression: 2
	}
	this.upClick = this.upClick.bind(this);
	this.downClick = this.downClick.bind(this);
	this.backClick = this.backClick.bind(this);
}

upClick(){

	//Denna funktionen ska spara detta värde

	if(this.state.memeProgression < memes.length-20)
	{
		this.setState({
			memeProgression: this.state.memeProgression+1
		});
	}
	else
	{
		this.props.changePage('match')
	}
}

downClick(){

	if(this.state.memeProgression < memes.length-20)
	{
		this.setState({
			memeProgression: this.state.memeProgression+1
		});
	}
	else
	{
		this.props.changePage('match')
	}
}

backClick(){

	this.setState({
		memeProgression: this.state.memeProgression-1
	});
}

render(){ 

	console.log(memes)

	let m = this.state.memeProgression

	if(this.state.memeProgression == 0){
		return (
			<div className='container_Q'>

				<div className='header_Q'> Quiz </div>
				<ProgressBar className='prog_Q' memeProgression={m}/>

				<div className='meme_Q'>
					<img className='memePic_Q' src={"./img/quiz/"+memes[m].image}/>
				</div>

				<img onClick= {this.upClick} className='yes_Q' src={"./img/icon/tummenupp.png"}/>
				<img onClick= {this.downClick} className='nope_Q' src={"./img/icon/tummenner.png"}/>
				<img className='back_Q' src={"./img/icon/backEmpty.png"}/> 

			</div>
		)
	}
	else
	{
		return (
			<div className='container_Q'>

				<div className='header_Q'> Quiz </div>
				<ProgressBar className='prog_Q' memeProgression={m}/>

				<div className='meme_Q'>
					<img className='memePic_Q' src={"./img/quiz/"+memes[m].image}/>
				</div>

				<img onClick= {this.upClick} className='yes_Q' src={"./img/icon/tummenupp.png"}/>
				<img onClick= {this.downClick} className='nope_Q' src={"./img/icon/tummenner.png"}/>
				<img onClick= {this.backClick} className='back_Q' src={"./img/icon/back.png"}/> 

			</div>
		)
	}
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

export default Quiz;
