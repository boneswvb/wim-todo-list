import React, { Component } from 'react';
import TodosOutput from './TodosOutput';
import todosData from './todosData';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
      }

	render() {
		const todo = this.state.todos.map(items => {
			return(
				<TodosOutput key={items.id} items={items} handleChange={this.handleChange} />
      );
		})
	  return (
	    <div className="todo-list">
	      <h1>Wim's Todo List</h1>
	      {todo}
	    </div>
	  )	
	}
}

export default App;
