import { PlusCircle } from 'phosphor-react'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Task } from '../../types/task'
import { v4 as uuidv4 } from 'uuid'
import * as Style from './style'
import { TextField } from '../TextField'

interface CreateTaskProps {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const CreateTask = ({ tasks, setTasks }: CreateTaskProps) => {
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState({
    hasError: false,
    errorMessage: '',
  })

  const handleClickOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    const hasDuplicatedTask = tasks.find(
      (item) => item.title.toLowerCase() === newTask.toLowerCase()
    )

    if (hasDuplicatedTask) return

    if (!newTask) {
      setError({
        hasError: true,
        errorMessage: 'Campo obrigatório',
      })

      return
    }

    setError({
      hasError: false,
      errorMessage: '',
    })

    const task: Task = {
      id: uuidv4(),
      title: newTask,
      isCompleted: false,
    }

    setTasks((oldState) => {
      window.localStorage.setItem(
        'ls_task',
        JSON.stringify([...oldState, task])
      )

      return [...oldState, task]
    })

    setNewTask('')
  }

  const handleChangeInputValue = (value: string) => {
    setNewTask(value)

    const hasDuplicatedTask = tasks.find(
      (item) => item.title.toLowerCase() === value.toLowerCase()
    )

    if (hasDuplicatedTask) {
      setError({
        hasError: true,
        errorMessage: 'Essa task já existe. Tente Novamente.',
      })
    } else {
      setError({
        hasError: false,
        errorMessage: '',
      })
    }
  }

  return (
    <Style.CreateTaskWrapper onSubmit={(event) => handleClickOnSubmit(event)}>
      <TextField
        label="Adicione uma nova tarefa"
        value={newTask}
        handleChangeInputValue={handleChangeInputValue}
        customError={error}
      />
      <Style.Button variant="contained" type="submit">
        Criar <PlusCircle size={16} />
      </Style.Button>
    </Style.CreateTaskWrapper>
  )
}
