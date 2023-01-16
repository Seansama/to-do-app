import React, {useState} from "react";
import ToDoList from "./toDoList";
function ToDo(props) {
   // console.log(todos)
    return(
        <div>
            {
                props.todos.map((item, index) => (
                    <ToDoList key={index} todos={item} />
                ))
            }
        </div>
        )
}

export default ToDo;