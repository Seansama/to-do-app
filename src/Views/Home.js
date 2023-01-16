import React, {useState} from "react";
import ToDo from "../Components/ToDo";
import ToDoList from "../Components/toDoList";

function Home(){
    const [todos, setTodos] = useState([{
        "id": 1,
        "title": "learn React",
        "Description": "Intro to React"
    },
        {
            "id": 2,
            "title": "Go to the Market",
            "Description": "Buy groceries and Fruits"
        }])
    return(
        <div>
            <ToDo todos={todos}/>
        </div>
        )
}

export default Home