import React from "react";
import styles from './Header.css';

export class Header extends React.Component{
	render() {
		return(
			<div className={styles.head} >
				<section className={styles.headOne}>
					<h2>
						{this.props.mName}
						& <br />
						{this.props.fName}
					</h2>
					<span onClick = {this.props.onPageNext} >
				    page 2
				  </span>
					<h4>
						{this.props.setName}
					</h4>				  
				</section>
			</div>
		);
	}
}