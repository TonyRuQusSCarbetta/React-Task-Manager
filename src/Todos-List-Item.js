import React, { Component } from 'react';
class TodosListItem extends Component {

constructor(props) {
  super(props)

  this.state = {
    isEditing: false
  }
}

renderTaskSection() {
  const { task, isComplete } = this.props;

  const taskStyle = {
    textDecoration: isComplete ? 'line-through' : 'none',
    textDecorationColor: isComplete ? 'rgb(51, 0, 0)' : 'none',
    color: 'rgb(255, 255, 255)',
    // color: isComplete ? 'rgb(5, 191, 107)' : 'red',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '1.1rem'
  };

  if (this.state.isEditing) {
    return (
      <div>
      <td>
        <form onSubmit={this.onSaveClick.bind(this)}>
          <input type="text" defaultValue={task} ref="editInput" className="editInput"/>
        </form>
      </td>
      </div>
    )
  }

  return (
    <div>
    <td
      style={taskStyle}
      onClick={this.props.toggleTask.bind(this, task)}>
      {task}
    </td>
    </div>
  );
}

renderActionsSection() {
  if (this.state.isEditing) {
    return (
      <div>
      <td>
      <button onClick={this.onSaveClick.bind(this)}>Save</button>
      <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
      </td>
      </div>
    );
  }
    return (
      <div>
      <td>
      <button onClick={this.onEditClick.bind(this)}>Edit</button>
      <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
      </div>
    );

}

  render() {
    return (

      <tr>
        <td>{this.renderTaskSection()}</td>
        <td>{this.renderActionsSection()}</td>
      </tr>

    );
  }

  onEditClick() {
    this.setState({
      isEditing: true
    })
  }

  onCancelClick() {
    this.setState({
      isEditing: false
    })
  }

  onSaveClick(e) {
    e.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

}

export default TodosListItem;
