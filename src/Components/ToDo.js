import React from "react";

function ToDo(){

    const [taskName, setTaskName] = React.useState('');
    const [tasks, setTasks] = React.useState([]);
    function AddTask(){
        setTasks(prevArray => [...prevArray, taskName]);
        setTaskName('');
    }

    function deleteTask(id){
        setTasks(tasks.filter(item => item.index !== id));
    }

    return(
        <div className="todo--container">
            <div className="todo--main--container">
                <input 
                    type="text" 
                    placeholder="Enter Task: " 
                    value={taskName} 
                    name="taskName" 
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button onClick={AddTask}>Add Task</button>

                {tasks.map((item, index) => {
                    return(
                        <div key={index}>
                            <h1>{item}</h1>
                            <button onClick={deleteTask(index)}>Delete Task</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDo;