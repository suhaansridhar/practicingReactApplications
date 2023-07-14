import React from "react";

function ToDo(){
    const [Task, setTask] = React.useState('');
    const [array, setArray] = React.useState([]);

    function addTask(){
        setArray(prevArray => [...prevArray, Task]);
        setTask('');
    }

    function deleteTask(id){
        setArray(array.filter((item, index) => index !== id));
    }

    return(
        <div className="todo--container">
            <input type="text" placeholder="Enter the task: " onChange={(e) => setTask(e.target.value)} name='Task' value={Task}/>
            <button onClick={addTask}>Add</button>

            {array.map((item, index) => {
                return(
                    <div key={index}>
                        <h4>{item}</h4>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDo;