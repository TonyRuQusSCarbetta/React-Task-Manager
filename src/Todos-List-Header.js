import React, { Component } from 'react';
import './App.css';


class TodosListHeader extends Component {
  render() {
    return (
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
    );
  }
}

export default TodosListHeader;
