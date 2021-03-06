import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message:'My todo list!',
      newTodo:'',
      todos:[]
    }
  }

  formSubmitted(event){
      event.preventDefault();
      this.setState({
        newTodo:'',
        todos:[...this.state.todos, {
          title: this.state.newTodo,
          done: false
        }]
      })

  }
  newTodoChanged(event){
      console.log(event.target.value);
      this.setState({newTodo: event.target.value})
  }

  toggleTodoDone(event, index){
    console.log(event.target.checked);
    const todos = [...this.state.todos]; //copy the array
    todos[index] = {...todos[index]}; // copy the todo
    todos[index].done = event.target.checked; // update done property on copied
    console.log(todos);
    this.setState({
      todos
    });
  }

  removeTodo(index){
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }


  allDone(){
    const todos = this.state.todos.map(todo=>{
      return{
        title: todo.title,
        done:true
      }
    });
    this.setState({
      todos
    });
  }

  render(){
  return (
    <div className="App">
      <h3>{this.state.message}</h3>

      <NewTodoForm
        newTodo={this.state.newTodo}
        formSubmitted={this.formSubmitted.bind(this)}
        newTodoChanged={this.newTodoChanged.bind(this)}
      />

      <button onClick={()=>this.allDone()}>AllDone</button>

      <TodoList
        todos={this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)}

      />

    </div>
  );
  }
}

export default App;
