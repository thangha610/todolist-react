import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css'
import checkAll from './components/img/down-arrow.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Wake up', isComplete: true },
        { title: 'Go to home', isComplete: false },
        { title: 'Learn', isComplete: false },
      ]
    }
  }

  onItemClicked(item) {
    return (event) => {
      const indexItem = this.state.todoItems.findIndex(todoItem => todoItem.title === item.title)
      const isComplete = item.isComplete
      const { todoItems } = this.state
      const cloneObj = JSON.parse(JSON.stringify(todoItems));
      console.log(cloneObj, 'Deep clone')
      // log todoItems before change
      console.log(isComplete, todoItems, indexItem)
      //  change todoItems arry
      todoItems[indexItem].isComplete = !isComplete
      // log todoItems after change
      console.log(isComplete, todoItems)
      this.setState({
        todoItems: todoItems
      })
    }
  }

  render() {
    const { todoItems } = this.state
    return (
      <div className="App">
        <header>
          {/* <h1> Hello </h1> */}
          <img src={checkAll} alt=""/>
          <input placeholder="What needs to be done" type="text"/>
        </header>
        <ul>
          {
            todoItems.map((item, index) =>
              <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default App;
