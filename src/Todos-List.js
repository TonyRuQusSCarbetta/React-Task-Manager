import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import TodosListHeader from './Todos-List-Header'
import TodosListItem from './Todos-List-Item'

class TodosList extends Component {

  //LODASH version of function
  //#1 Pass props which retrieves todos, than we map over it
  //#2 For each todo we return a new TodosListItem &
  //#3 using the spread we return each object in the todos array individually
  renderItems() {

    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) =>
    <TodosListItem key={index} {...todo} {...props} />);
  }

  render() {
    return (
      <div>
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
      </div>
    );
  }
}

export default TodosList;
