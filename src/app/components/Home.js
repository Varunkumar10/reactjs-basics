import React from "react";

export class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			status: 0
	};
	setTimeout(() =>{
		this.setState({
			status: 1
		});
	},3000);
}

	makeOlder(){
		this.setState({
			age: this.state.age + 1,
			});
	}


	render(){
		// console.log(this.props.user);
		return(
			<div>
			<h1>Im a Home component</h1>
			<p>Name: {this.props.name}</p>
			<p>Age: {this.state.age}</p>
			<p>Status: {this.state.status}</p>
			<div>
			<span>Brothers</span>
				<ul>
				{this.props.user.brothers.map((brothers, i)=><li key={i}>{brothers}</li>)}
				</ul>
			</div>
			<button onClick={()=> this.makeOlder()}>Age</button>
			</div>
			);
	}
}