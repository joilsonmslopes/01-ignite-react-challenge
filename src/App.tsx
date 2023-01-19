import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'

import './global.css'
import { Task } from './types/task'

// const tasks: Task[] = [
//   {
//     id: uuidv4(),
//     title: 'Concluir Ignite trilha ReactJS até Março de 2023',
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     title: 'Concluir GoExpert até Junho de 2023',
//     isCompleted: false,
//   },
// ]

function App() {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const localStorage = window.localStorage.getItem('ls_task')

    if (localStorage) {
      return JSON.parse(localStorage)
    }

    return []
  })

  return (
    <>
      <Header />
      <CreateTask setTasks={setTaskList} />
      <TasksList tasks={taskList} setTasks={setTaskList} />
    </>
  )
}

export default App
