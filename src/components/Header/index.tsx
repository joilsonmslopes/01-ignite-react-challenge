import { Link } from 'react-router-dom'
import todoIcon from '../../assets/rocket.svg'
import style from './style.module.css'

export const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/" className={style.logoWrapper}>
        <img src={todoIcon} alt="Logo ToDo List" />
        <h1>
          to<span>do</span>
        </h1>
      </Link>
    </div>
  )
}
