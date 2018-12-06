import React from 'react';
import memes from './meme.json';

class Quiz extends React.Component { 
	constructor(){
		super(); //ger this kontexten av dess komponent, inte parents
		this.state = {
			currentImage: 0
		}
		this.onClick = this.handleClick.bind(this);
	}


	handleClick(event){
		
		if(this.state.currentImage < memes.length)
		{
			this.setState({
					currentImage: this.state.currentImage+1
			});
		}
		else
		{
			//this.props.changePage() pekar på function changePage i App.js
		}
	}

	render(){ 

		console.log(memes)

		let txt = this.props.txt
		let t = this.state.currentImage

		return (
			<div>
		
				<img onClick= {this.onClick} src={"./img/quiz/"+memes[t].image}/>
				<div>{this.state.currentImage}</div>
				<h1>{txt}</h1>


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

			</div>
		)
	}


//<button onClick= {this.onClick}>
//	Hej 
//	{this.state.currentImage}
//</button>


}

export default Quiz
