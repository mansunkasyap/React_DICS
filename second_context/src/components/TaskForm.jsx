import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    // console.log(addTask);
    const [taskDescription, setTaskDescription] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        if (!taskDescription.trim()) return;
        addTask(taskDescription);
        setTaskDescription('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='flex w-auto justify-center'>
                <input
                    type='text'
                    value={taskDescription}
                    placeholder='Enter Your Task here'
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className='shadow-md bg-slate-300 w-3/12 h-8 rounded-md text-black text-lg outline-none'
                />

                <button type='submit' 
                className='bg-orange-400 px-2 py-1 rounded-lg'
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default TaskForm