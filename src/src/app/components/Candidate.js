import React from "react";

export class Candidate extends React.Component{
	render() {
		return(
			<div>
				<form>
					Candidate belongs to: <br />
					<input type = "radio" name = "List" value = "AList" /> A List <br />
					<input type = "radio" name = "List" value = "BList" /> B List <br />
					<input type = "radio" name = "List" value = "CList" /> C List
					<br />
					Name: 
					<input type = "text" value ={this.props.name} required />
					<br />
					Mobile Number:
					<input type = "text" required />
				</form>
			</div>
		)
	}
}