import React from 'react';

const NewTodoForm = (props)=>{
	return(
      <form onSubmit={props.formSubmitted}>
          <label htmlFor="newTodo">Add new Todo</label>
          <input onChange={props.newTodoChanged} id="newTodo" name ="newTodo" value={props.newTodo}/>
            <button type="Submit">Submit</button>
      </form>
	)
}

export default NewTodoForm;