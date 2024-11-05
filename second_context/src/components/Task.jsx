import React from 'react';

const Task = ({task, deleteTask, toggleTaskCompletion }) => {
    console.log(task);

    const handleToggle = (event) => {
        console.log(event.target.checked);
        // Extracting the new completion status from the event
        const newStatus = event.target.checked;
        // Calling toggleTaskCompletion with the new status and task ID
        toggleTaskCompletion(task.id, newStatus);
    };

    return (
        <div className='task-compo flex w-3/5 justify-around bg-slate-600 text-white rounded-md my-2'>
            <input
                type="checkbox"
                checked={task.isCompleted}
                // value={}
                onChange={() =>toggleTaskCompletion(task.id)} // Invoking handleToggle with event
            />
            <p className={`${task.isCompleted? 'line-through': ''}`}>
                {task.description}
            </p>
            <button onClick={() => deleteTask(task.id)}>&times;</button>
        </div>
    );
};

export default Task;
