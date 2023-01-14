import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'

import './global.css'

export interface Task {
  id: string
  title: string
  isCompleted: boolean
}

const tasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Concluir Ignite trilha ReactJS até Março de 2023',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'Concluir GoExpert até Junho de 2023',
    isCompleted: false,
  },
]

function App() {
  const [taskList, setTaskList] = useState<Task[]>(tasks)

  return (
    <>
      <Header />
      <CreateTask setTasks={setTaskList} />
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
