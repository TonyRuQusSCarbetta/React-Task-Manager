import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import TodosList from './Todos-List';
import CreateTodo from './Create-Todo';

//todos is dummy data since we are not using api/data fetch
const todos = [
  // {
  //   task: 'make React to do list',
  //   isComplete: false
  // },
  // {
  //   task: 'eat dinner',
  //   isComplete: true
  // }
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos
    }
  }

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
      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 text-center p-5">


          <h1>Task Manager</h1>
          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
            <div className="ml-4">
            <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
             />
             </div>
          </div>
        </div>

        <div className="row">
          <footer className="col-12">
            <a href="http://www.CarbettaCoding.com" target="_blank"><img src="https://i.imgur.com/2RiypHA.png" className="footer-img mx-auto d-block mt-5 mb-0" alt="CarbettaCoding.com"/>
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
