import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import TodosList from './Todos-List';
import CreateTodo from './Create-Todo';

//todos is dummy data since we are not using api/data fetch
const todos = [
  {
    task: 'make React to do list',
    isComplete: false
  },
  {
    task: 'eat dinner',
    isComplete: true
  }
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos
    }
  }

  //@ about 38mins
  toggleTask(task) {
   const foundToDo = _.find(this.state.todos, todo => todo.task === task) ;
   foundToDo.isComplete = !foundToDo.isComplete;
   this.setState({ todos: this.state.todos })
  }


//this function takes the task and pushes it to the todos array, the task is coming from the input value which is not targetted until we passed this function via props to the Create-Todo component.
createTask(task) {
  this.state.todos.push({
    task: task,
    isCompleted: false
  })
  //sets state with the new task in the array
  this.setState({
    todos: this.state.todos
  })
}


saveTask(oldTask, newTask) {
  const foundToDo = _.find(this.state.todos, todo => todo.task === oldTask);
  foundToDo.task = newTask;
  this.setState({ todos: this.state.todos });
}

deleteTask(taskToDelete) {
  _.remove(this.state.todos, todo => todo.task === taskToDelete);
  this.setState({ todos: this.state.todos })

}

  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <div className="col-md-12 ">


          <h1>Tony's Task Manager</h1>
          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
            <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
