import { v4 as uuidv4 } from 'uuid'

import './global.css'

interface TodoList {
  id: string
  title: string
  isCompleted: boolean
}

const todoList: TodoList[] = [
  {
    id: uuidv4(),
    title: 'Concluir Ignite trilha ReactJS até Março de 2023',
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: 'Concluir GoExpert até Junho de 2023',
    isCompleted: false
  }
]

function App() {
  console.log(todoList);
  

  return (
    <h1>Desafio 01 - Praticando Conceitos</h1>
  )
}

export default App
