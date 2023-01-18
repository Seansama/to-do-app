import React, {useState} from "react";
function ToDoList(props) {
return(
    <div>
        <h2>{props.todos.title}</h2>
        <p>{props.todos.description}</p>
    </div>
)
}
export default ToDoList;

//When creating a component you should be aware of the data it requires