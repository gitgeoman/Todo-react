import React, {Component} from 'react';

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
  newTodoChange(event){
      console.log(event.target.value);
      this.setState({newTodo: event.target.value})
  }

  render(){
  return (
    <div className="App">
      <h3>{this.state.message}</h3>

      <form onSubmit={(event)=>this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event)=>this.newTodoChange(event)} id="newTodo" name ="newTodo" value={this.state.newTodo}/>
            <button type="Submit">Add Todo</button>
      </form>
      <ul>
        {this.state.todos.map( todo=>{
          return <li key={todo.title}>{todo.title}</li>
        })}
      </ul>

    </div>
  );
  }
}

export default App;
