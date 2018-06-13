import React from "react";

export class Form extends React.Component{
	constructor(props) {
    super(props);
    this.state = {name: props.name};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({name: this.state.value});
    event.preventDefault();
  }

  render() {
    return (
    	<div>
    	<h2>{this.state.name}</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}