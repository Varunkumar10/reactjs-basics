import React from "react";

export class Header extends React.Component{
	render(){
		var name="varun";
		return(
			<div>
			<h1>Im a Header component</h1>
			<h2>{name}</h2>
			</div>

			);
	}
}