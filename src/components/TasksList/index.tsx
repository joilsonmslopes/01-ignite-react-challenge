import { Task } from '../../types/task'
import styles from './tasks-list.module.css'

import clipboardImg from '../../assets/clipboard.svg'
import { Trash } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'

interface TasksListProps {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
  const countTasks = tasks.reduce(
    (countTask, task) => {
      countTask = {
        total: countTask.total + 1,
        completedTasks: task.isCompleted
          ? countTask.completedTasks + 1
          : countTask.completedTasks,
      }

      return countTask
    },
    {
      total: 0,
      completedTasks: 0,
    }
  )

  const handleChangeCheckboxValue = (taskId: string) => {
    const newTodoList = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setTasks(newTodoList)
  }

  const handleClickOnDeleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(({ id }) => id !== taskId)

    setTasks(filteredTasks)
  }

  return (
    <div className={styles.listTasksWrapper}>
      <div className={styles.container}>
        <header>
          <div className={styles.createdTasks}>
            <h3>Tarefas criadas</h3>
            <span>{countTasks.total}</span>
          </div>
          <div className={styles.completedTasks}>
            <h3>Concluídas</h3>
            <span>
              {tasks.length > 0
                ? `${countTasks.completedTasks} de ${countTasks.total}`
                : countTasks.completedTasks}
            </span>
          </div>
        </header>
        {tasks.length > 0 ? (
          <ul className={styles.filledContent}>
            {tasks.map((task) => {
              return (
                <li key={task.id} className={styles.taskWrapper}>
                  <label htmlFor={task.id} className={styles.inputWrapper}>
                    <input
                      type="checkbox"
                      value={task.title}
                      onChange={() => handleChangeCheckboxValue(task.id)}
                      id={task.id}
                    />
                    <label htmlFor={task.id}>{task.title}</label>
                  </label>
                  <button onClick={() => handleClickOnDeleteTask(task.id)}>
                    <Trash size={24} color="#808080" />
                  </button>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className={styles.emptyContent}>
            <div className={styles.imageWrapper}>
              <img src={clipboardImg} alt="clipboard" />
            </div>
            <div className={styles.message}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
