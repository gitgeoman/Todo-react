import React from 'react';

const NewTodoForm = (props)=>{
	return(
      <form onSubmit={props.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={props.newTodoChanged} id="newTodo" name ="newTodo" value={props.newTodo}/>
            <button type="Submit">Add Todo</button>
      </form>
	)
}

export default NewTodoForm;