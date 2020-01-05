import React from 'react';

function TodosOutput(props) {
	const styles = {
		textDecoration: "line-through",
		color: "#cdcdcd"
	}
  return (
    <div className="todo-item">
    	<input 
	    	type="checkBox" 
	    	checked={ props.items.completed } 
	    	onChange={() => props.handleChange(props.items.id) }
    	/>
      <p style={ props.items.completed ? styles : null }>{ props.items.text }</p>
    </div>
  );
}

export default TodosOutput;
