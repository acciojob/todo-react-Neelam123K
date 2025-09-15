import React, {useState} from "react";
import './../styles/App.css';
import Todo from "./Todo.js"

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [task, setTask] = useState([]);

  const addTask = () => {
    if (inputValue.trim() !== ''){
      setTask([...task, inputValue]);
      setInputValue('')
    }
  };

  const removeTask = (index) => {
    const newTask = task.filter((_, i) => i !== index);
    setTask(newTask);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>TO-Do List</h1>
        <input  type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={addTask} >Add Todo</button>
<ul>
                {task.map((tasks, index) => (
                    <Todo key={index} tasks={tasks} onDelete={() => removeTask(index)} />
                ))}
            </ul>

    </div>
  )
}

export default App
