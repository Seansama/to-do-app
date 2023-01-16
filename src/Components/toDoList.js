import React, {useState} from "react";
function ToDoList() {
    const [toDo, setTodo] = useState({
        "title": "Learn React",
        "Description": "Lorem ipsum"
    })
    console.log(toDo)


return(
    <div>
        <h2>{toDo.title}</h2>
        <p>{toDo.Description}</p>
    </div>
)
}
export default ToDoList;

//When creating a component you should be aware of the data it requires