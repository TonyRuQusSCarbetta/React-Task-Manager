import React, { Component } from 'react';
import _ from 'lodash';
class CreateTodo extends Component {

  renderError() {
    if (!this.state.error) {
      return null;
    }
      return <div style ={{ color: 'red' }}>{this.state.error}</div>
  }

  constructor(props) {
    super(props)
      this.state = {
        error: null
      }
}

componentDidMount(){
   this.refs.createInput.focus();
 }

  render() {
    return (
      <div>
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput"/>
        <button>Create</button>
        {this.renderError()}
      </form>
      </div>
    );
  }

//this function takes the createTask function as a prop and uses the value of the input as a parameter
  handleCreate(e) {
    e.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
    this.refs.createInput.focus();
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already exists.';
    } else {
      return null;
    }
  }

}

export default CreateTodo;
