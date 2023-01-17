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
    }
    //function to add anew toDo
       const AddNewToDo = () => {

       }
    return(
        <div>
            <form>
                <input type="text" placeholder="Enter new Todo"/>
                    <button type="submit">Submit todo</button>
            </form>
            <ToDo todos={todos}/>
        </div>
        )
}

export default Home