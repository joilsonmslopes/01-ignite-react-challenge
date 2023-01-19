import { InputText } from '../InputText'
import styles from './create-task.module.css'
import { PlusCircle } from 'phosphor-react'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  InvalidEvent,
  SetStateAction,
  useState,
} from 'react'
import { Task } from '../../types/task'
import { v4 as uuidv4 } from 'uuid'

interface CreateTaskProps {
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const CreateTask = ({ setTasks }: CreateTaskProps) => {
  const [newTask, setNewTask] = useState('')

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event?.target.setCustomValidity('Campo requerido')
  }

  const handleClickOnSubmit = (event: FormEvent) => {
    event.preventDefault()

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

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    event?.target.setCustomValidity('')

    const { value } = event.target

    setNewTask(value)
  }

  return (
    <form
      className={styles.createTaskWrapper}
      onSubmit={(event) => handleClickOnSubmit(event)}
    >
      <InputText
        type="text"
        name="newTask"
        label="Adicione uma nova tarefa"
        value={newTask}
        onInvalid={handleNewTaskInvalid}
        onChange={(event) => handleChangeInputValue(event)}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
