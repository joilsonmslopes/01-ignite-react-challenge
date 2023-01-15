import { InputText } from '../InputText'
import styles from './style.module.css'
import { PlusCircle } from 'phosphor-react'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
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

  const handleClickOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    const task: Task = {
      id: uuidv4(),
      title: newTask,
      isCompleted: false,
    }

    setTasks((oldState) => [...oldState, task])

    setNewTask('')
  }

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setNewTask(value)
  }

  return (
    <form className={styles.createTaskWrapper} onSubmit={handleClickOnSubmit}>
      <InputText
        type="text"
        name="task"
        label="Adicione uma nova tarefa"
        value={newTask}
        onChange={(event) => handleChangeInputValue(event)}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
