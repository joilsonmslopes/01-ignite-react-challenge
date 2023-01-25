import { ThemeProvider, CssBaseline } from '@mui/material'
import { useState } from 'react'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

import { theme } from './styles/theme'
import { Task } from './types/task'

function App() {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const localStorage = window.localStorage.getItem('ls_task')

    if (localStorage) {
      return JSON.parse(localStorage)
    }

    return []
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <Header />
        <CreateTask tasks={taskList} setTasks={setTaskList} />
        <TaskList tasks={taskList} setTasks={setTaskList} />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
