import React, { useState, useId, Fragment } from 'react'
import TaskForm from './components/TaskForm';
import Task from './components/Task';
// import Counter from './components/useEffect/Counter';
import Counter from './components/useReduce/Counter';
import WindowTracker from './components/useEffect/WindowTracker';
import MouseContainer from './components/useEffect/MouseContainer';

import Music from './components/audio/Music';
import SongSearch from './components/audio/SongSearch.jsx';


const App = () => {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);
  const id = useId();

  const addTask = (taskDescription) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      description: taskDescription,
      isCompleted: true
    };
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(
      tasks.filter((task)=>(task.id !== taskId))
    )
  }

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, isCompleted : !task.isCompleted} : task   ))
  }

  return (
    // <div className='App'>
    //   <h1 className='bg-green-400 text-center rounded-lg font-bold text-white py-2 w-2/3 ml-52'>
    //     Task Manager
    //   </h1>

    //   <TaskForm
    //     addTask={addTask}
    //   />

    //   <div className="class-list">
    //     {
    //       tasks.map((task) => (
    //         <Task
    //           key={tasks.id}
    //           task={task}
    //           deleteTask={deleteTask}
    //           toggleTaskCompletion={toggleTaskCompletion}
    //         />
    //       ))
    //     }
    //   </div>



    // </div>
    <Fragment>
      {/* <Counter /> */}
      {/* <MouseContainer /> */}
      {/* <Counter /> */}
      <Music  />
      {/* <SongSearch /> */}
      {/* <Music /> */}
    </Fragment>
  )
}

export default App


// import React from 'react'
// import QuizForm from './components/Form/QuizForm'

// const App = () => {

//   return (
//     <div>
//       <QuizForm />
//     </div>
//   )
// }

// export default App