import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import { ToDoList } from "./components/ToDoList";
class App extends React.Component{
	render(){
		var user = {
			brothers: ["Bala","Ashwin","Sathish","Gowtham","Eniyan"],
			home: "ooty"
	};
		return (
			<div>
			<Header/>
			<Home name="varun" initialAge = {23} user={user}/>
			<Form name=""/>
			<br/>
			<ToDoList />
			</div>

			
			);
	}
}

render(<App/>, document.getElementById("app"));