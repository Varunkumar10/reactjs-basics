import React from "react";

export class ToDoList extends React.Component{
	editTodo(){
		this.setState({ isEdit: true});

		if(this.state.isEdit){

		}


	}





	removeTodo(index){
		let todos = this.state.todos;

		let todo= todos.findIndex(function(todo){
			return todo.counter === index
		});

		todos.splice(todo, 1);

		this.setState({
			todos: todos
		});
	}




	addTodo(event){
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
			todos: todos,
			counter: counter
		});

		this.refs.todoForm.reset();
	}
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.state = {
			todos : [],
			title : "React app",
			counter : 0,
			isEditing : false
		}
		
	}

	render() {
		let title = this.state.title;
		let todos = this.state.todos;
		const {isEditing} = this.state;


		return (
			<div>
			<h2>{title}</h2>
			<form ref="todoForm">
				<input type="text"  ref= "name" />
				<input type="text"  ref= "completed" />
				<button onClick = {this.addTodo}>Add</button>
				</form>
				<br/>
				<section>
				
					isEditing ? <form>
				<input type= "text" defaultValue = {this.state.todos}/>
				<button type = "submit">Edit</button>

				</form>
				



				
				/*<ul>
				{todos.map((todo => <li key ={todo.counter}>{todo.name}
					<button onClick = {this.editTodo}>Edit</button>
					<button onClick={this.removeTodo.bind(null, todo.counter)}>Delete</button></li>))}
				</ul>*/	
				</section>
		
			</div>
		);
	}
}