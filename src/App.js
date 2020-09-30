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

      <form onSubmit={(event)=>this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event)=>this.newTodoChange(event)} id="newTodo" name ="newTodo" value={this.state.newTodo}/>
            <button type="Submit">Add Todo</button>
      </form>
      <button onClick={()=>this.allDone()}>AllDone</button>


      <ul>
        {this.state.todos.map((todo, index )=>{
          return (
            <li key={todo.title}>
              <input 
                onChange={(event)=>this.toggleTodoDone(event, index)} 
                type="checkbox"
                checked={todo.done}
              />
              {/*<span style={{textDecoration: todo.done?'line-through':'inherit'}}>{todo.title}
              </span>
            */}
            <span className={todo.done?'done':''}>{todo.title}</span> 
            <button onClick={()=>this.removeTodo(index)}>Remove</button>

            </li>
            )
        })}
      </ul>

    </div>
  );
  }
}

export default App;
