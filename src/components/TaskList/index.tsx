import { Dispatch, SetStateAction } from 'react'
import { Task } from '../../types/task'

import clipboardImg from '../../assets/clipboard.svg'
import { Trash } from 'phosphor-react'

import * as Style from './style'

interface TasksListProps {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const TaskList = ({ tasks, setTasks }: TasksListProps) => {
  const countTasks = tasks?.reduce(
    (countTask, task) => {
      countTask = {
        total: countTask.total + 1,
        completedTasks: task?.isCompleted
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
    if (!tasks) {
      return
    }
    const newTodoList = tasks?.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    window.localStorage.setItem('ls_task', JSON.stringify(newTodoList))

    setTasks(newTodoList)
  }

  const handleClickOnDeleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(({ id }) => id !== taskId)

    window.localStorage.setItem('ls_task', JSON.stringify(filteredTasks))

    if (!filteredTasks.length) {
      window.localStorage.removeItem('ls_task')
    }

    setTasks(filteredTasks)
  }

  return (
    <Style.Container>
      <Style.Content>
        <Style.ContentHeader>
          <Style.HeaderTitleWrapper>
            <Style.HeaderTitle tasktype="created">
              Tarefas criadas
            </Style.HeaderTitle>
            <Style.Span>{countTasks.total}</Style.Span>
          </Style.HeaderTitleWrapper>
          <Style.HeaderTitleWrapper>
            <Style.HeaderTitle tasktype="completed">
              Concluídas
            </Style.HeaderTitle>
            <Style.Span>
              {tasks.length > 0
                ? `${countTasks.completedTasks} de ${countTasks.total}`
                : countTasks.completedTasks}
            </Style.Span>
          </Style.HeaderTitleWrapper>
        </Style.ContentHeader>
        {tasks.length > 0 ? (
          <Style.FilledContent>
            {tasks.map((task) => {
              return (
                <Style.TaskWrapper key={task.id}>
                  <Style.LabelWrapper htmlFor={task.id}>
                    <Style.CheckBox
                      type="checkbox"
                      value={task.title}
                      onChange={() => handleChangeCheckboxValue(task.id)}
                      id={task.id}
                      checked={task.isCompleted}
                    />
                    <Style.Label htmlFor={task.id}>{task.title}</Style.Label>
                  </Style.LabelWrapper>
                  <Style.Button
                    onClick={() => handleClickOnDeleteTask(task.id)}
                  >
                    <Trash size={24} color="#808080" />
                  </Style.Button>
                </Style.TaskWrapper>
              )
            })}
          </Style.FilledContent>
        ) : (
          <Style.EmptyContent>
            <Style.ImageWrapper>
              <Style.Image src={clipboardImg} alt="clipboard" />
            </Style.ImageWrapper>
            <Style.EmptyContentMessage>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </Style.EmptyContentMessage>
          </Style.EmptyContent>
        )}
      </Style.Content>
    </Style.Container>
  )
}
