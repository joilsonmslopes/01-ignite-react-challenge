import { Task } from '../../types/task'
import styles from './styles.module.css'

import clipboardImg from '../../assets/clipboard.svg'

interface TasksListProps {
  tasks: Task[]
}

export const TasksList = ({ tasks }: TasksListProps) => {
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

  return (
    <div className={styles.listTasksWrapper}>
      <div className={styles.content}>
        <header>
          <div className={styles.createdTasks}>
            <h3>Tarefas criadas</h3>
            <span>{countTasks.total}</span>
          </div>
          <div className={styles.completedTasks}>
            <h3>Concluídas</h3>
            <span>
              {countTasks.completedTasks > 0
                ? `${countTasks.completedTasks} de ${countTasks.total}`
                : countTasks.completedTasks}
            </span>
          </div>
        </header>
        {tasks.length > 0 ? (
          <div className={styles.filledContent}></div>
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
