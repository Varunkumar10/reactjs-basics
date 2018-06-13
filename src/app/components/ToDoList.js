import React from "react";

export class ToDoList extends React.Component{
	addToDo(event){
		event.preventDefault();
		let name= this.refs.name.value;
		let completed= this.refs.completed.value;
		let counter= this.state.counter;
		console.log(counter);

		let todo = {
			name,
			completed,
			counter
		};

		counter+=1;

		let todos = this.state.todos;

		todos.push(todo);

		this.setState({
			todos: todo,
			counter: counter
		});

		this.refs.todoForm.reset();
	}
	constructor() {
    super();
    this.addToDo = this.addToDo.bind(this);
    this.state = {
    	todos : [],
    	title : "React app",
    	counter : 0
    }
    
  }

  render() {
    return (
    	<div>
    	<h2>{this.state.title}</h2>
      <form ref="todoForm">
        <input type="text"  ref= "name" />
        <input type="text"  ref= "completed" />
        <button onClick = {this.addToDo}>Add</button>
        </form>
        <pre>
        {JSON.stringify(this.state.todos)}
        </pre>
      </div>
    );
  }
}