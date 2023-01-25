import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Task } from '../../types/task'

import clipboardImg from '../../assets/clipboard.svg'
import { Trash, WarningCircle } from 'phosphor-react'

import * as Style from './style'
import { TextField } from '../TextField'
import { Button, Modal, Typography } from '@mui/material'

interface TasksListProps {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const TaskList = ({ tasks, setTasks }: TasksListProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    setFilterValue('')
  }, [tasks.length])

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

  const handleClickOnDeleteAllTasks = () => {
    setTasks([])

    window.localStorage.removeItem('ls_task')

    setOpenModal(!openModal)
  }

  const handleChange = (value: string) => {
    setFilterValue(value)
  }

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filterValue.toLowerCase())
  )

  return (
    <>
      <Style.Container>
        <Style.Content>
          <Style.FilterAndDeleteTaskWrapper>
            {tasks.length > 0 ? (
              <Style.DeleteAllTasksButton
                onClick={() => setOpenModal(!openModal)}
              >
                Apagar todas as tasks
                <WarningCircle size={24} color="#FBC02D" />
              </Style.DeleteAllTasksButton>
            ) : (
              <Style.EmptyDiv />
            )}
            <TextField
              label="Filtrar"
              value={filterValue}
              handleChangeInputValue={handleChange}
              maxwidth="250px"
            />
          </Style.FilterAndDeleteTaskWrapper>
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
              {filteredTasks.map((task) => {
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
      <Modal
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Style.Box>
          <Typography
            id="modal-modal-title"
            color="primary.contrastText"
            variant="h6"
            component="h3"
          >
            Deseja apagar todas as suas tarefas?
          </Typography>
          <Style.ButtonsWrapper>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpenModal(!openModal)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOnDeleteAllTasks}
            >
              Aceitar
            </Button>
          </Style.ButtonsWrapper>
        </Style.Box>
      </Modal>
    </>
  )
}
