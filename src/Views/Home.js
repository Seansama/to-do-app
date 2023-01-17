import React, {useState} from "react";
import ToDo from "../Components/ToDo";
import ToDoList from "../Components/toDoList";

function Home(){
    const [todos, setTodos] = useState([{
        "id": 1,
        "title": "learn React",
        "description": "Intro to React",
        "status": false
    },
        {
            "id": 2,
            "title": "Go to the Market",
            "description": "Buy groceries and Fruits",
            "status": false
        }])
    //new todo state
    const [newTodo, setNewTodo] = useState("")
//handle input change
    const handleChange = (e) => {
      e.preventDefault();
      setNewTodo(e.target.value)

    }
    //function to add anew toDo
       const handleSubmit = (e) => {
e.preventDefault()
           const newTask = {
               "id": Math.floor(Math.random()*10),
               "title": newTodo,
               "description": "Buy groceries and Fruits",
               "status": false
           }
           console.log(newTask)
           setTodos([...todos,newTask])
       }
    return(
        <div>
            <h1>{newTodo}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter new Todo" onChange={handleChange} name="newTodo" value={newTodo}/>
                    <button type="submit" >Submit todo</button>
            </form>
            <ToDo todos={todos}/>
        </div>
        )
}

export default Home