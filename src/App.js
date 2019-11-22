import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { connect } from 'react-redux'
import { editTodo, dragAction } from './actions';
import { notDroppableClassList } from "./utils/classList";
import { getFilteredTodos } from "./utils/getFilteredTodos";
import HowToUse from "./components/HowToUse";
import Sidebar from "./components/Sidebar";

let selected = null, source = -1, destination = -1;
class App extends Component {

  state = {
    showSidebar: false,
    showHowToUse: false
  }

  handleClick = e => {
    let { todos, editTodo } = this.props;
    if (this.state.showSidebar) {
      this.setState({
        showSidebar: !this.state.showSidebar
      })
    }
    todos.filteredTodos.map(todo => (todo.editing ? editTodo(todo.id) : null));
  }

  handleDragStart = (e) => {
    source = e.target.id;
    destination = e.target.id;
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.dropEffect = "move";
    let data = this.props.todos.filteredTodos.map(d => d);
    selected = Object.assign({}, data.splice(Number(source), 1)[0]);
    data.splice(Number(source), 0, selected);
    this.props.dragAction(Number(source), 1, selected);
  }

  onDragEnter = (e) => {
    if (e.target.parentElement.parentElement.classList.contains("draggable")) {
      e.target.parentElement.parentElement.classList.add('over');
    }
  }

  onDragLeave = (e) => {
    e.stopPropagation();
    if (e.target.parentElement.parentElement.classList.contains("draggable"))
      e.target.parentElement.parentElement.classList.remove('over');
  }

  handleDragOver = (e, length) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (e.target.id !== destination) {
      if (!notDroppableClassList(e.target.id)) {
        this.props.dragAction(Number(destination), 1);
        if (e.target.id !== "ul") {
          destination = e.target.id;
          this.props.dragAction(Number(destination), 0, selected);
        }
        else {
          destination = length - 1;
          this.props.dragAction(destination, 0, selected);
        }
      }
    }
  }

  onDragEnd = e => {
    this.props.dragAction(Number(destination), 1, selected);
    let listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function (item) {
      item.classList.remove('over');
    });
  }
  handleSidebarnav = (e) => {
    if (this.state.showHowToUse) {
      this.setState({
        showHowToUse: !this.state.showHowToUse
      })
    }
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

  handleShowHowToUse = e => {
    this.setState({
      showHowToUse: !this.state.showHowToUse,
      showSidebar: !this.state.showSidebar
    })
  }

  hideHowToUse = e => {
    this.setState({
      showHowToUse: !this.state.showHowToUse,
    })
  }

  onClickOpenSidebar = e => {
    e.stopPropagation();
  }
  render() {
    return (
      <div id="outer-container" className="outer-container" onClick={this.handleClick}
        onDragStart={(e) => this.handleDragStart(e)}
        onDragEnter={e => this.onDragEnter(e)}
        onDragLeave={e => this.onDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e, this.props.todos.filteredTodos.length)}
        onDragEnd={e => this.onDragEnd(e)}
      >
        <div id="inner-container" className="inner-container" onClick={this.handleClick}>
          <Sidebar
            className={this.state.showSidebar ? "open" : ""}
            Sidebar={this.state.showSidebar}
            onClick={e => this.onClickOpenSidebar(e)}
            showHowToUse={this.state.showHowToUse}
            getHowToUse={e => this.handleShowHowToUse(e)}
          />
          <AddTodo
            getSidebarval={(e) => this.handleSidebarnav(e)}
            showSidebar={this.state.showSidebar}
            showHowToUse={this.state.showHowToUse}
            getHowToUse={e => this.handleShowHowToUse(e)}
          />
          <TodoList
            getSidebarval={(d) => this.handleSidebarnav(d)}
            showSidebar={this.state.showSidebar}
          />
          <HowToUse
            className={this.state.showHowToUse ? "open" : ""}
            handleSidebarnav={e => this.handleSidebarnav(e)}
            hideHowToUse={e => this.hideHowToUse(e)}
          />
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  editTodo: id => dispatch(editTodo(id)),
  dragAction: (index, method, object) => dispatch(dragAction(index, method, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
