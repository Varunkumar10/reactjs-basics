import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Content } from "./components/Content";
import styles from './App.css';
import { Footer } from "./components/Footer";
import { Candidate } from "./components/Candidate";

class App extends React.Component {
	constructor(props){
		super();
		this.state = {
			page: 1
		};
	}

	handlePageNext = () => {
		this.setState({
			page: 2
		});
	}

	render() {
		return (
			<div>
			  <div className={styles.header}>
				<Header 
					mName={"Arun"}
					fName={"Pragna Pathak"}
					setName={"Diamonds"} 
					onPageNext={this.handlePageNext}
				/>
				</div>
				
				{this.state.page == 1 ?
					<Candidate name ={"varun"}/> :
					<div className={styles.row}>
						<div className={styles.column}>
							<Content />
						</div>
						<div className={styles.column}>			
							<Content />
						</div>
					</div> 
					// <main className="second-page">
					// 	This is second page
					// </main>
				}
				<div className={styles.foot}>
					<Footer
						onPageNext={this.handlePageNext}
					/>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("app"));