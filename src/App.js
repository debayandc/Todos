import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { connect } from 'react-redux'
import { editTodo } from './actions'
import { getFilteredTodos } from "./components/getFilteredTodos";
class App extends Component {

  handleClick = e => {
    let { todos, editTodo } = this.props;
    todos.filteredTodos.map(todo => (todo.editing ? editTodo(todo.id) : null));
  }

  //   handleDnD = (src, dest) => {
  //     console.log(src, dest);
  //     onDrop = {(source, dest) => this.handleDnD(source, dest)
  //   }
  // }

  render() {
    return (
      <div className="outer-container" onClick={this.handleClick}>
        <div className="inner-container" onClick={this.handleClick}>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  editTodo: id => dispatch(editTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
