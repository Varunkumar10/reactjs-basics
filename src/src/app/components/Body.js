import React from "react";

export class Body extends React.Component{
	render(){
		return(
			<div>
			 	<h1>
			 		{this.props.name1} + {this.props.name2} = {this.props.name3}
			 	</h1>
			</div>
		);
	}
}