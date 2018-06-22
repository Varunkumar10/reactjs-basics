import React from "react";
import styles from './Footer.css';

export class Footer extends React.Component{
	render(){
		return(
			<div className = {styles.foot} >
				<div onClick={this.props.onPageNext}> <span>page 2</span> </div>
			</div>
		)
	}
}