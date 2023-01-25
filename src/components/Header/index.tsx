import todoIcon from '../../assets/rocket.svg'
import * as Style from './style'

export const Header = () => {
  return (
    <Style.Header>
      <Style.RouterLink to="/">
        <Style.Image src={todoIcon} alt="Logo ToDo List" />
        <Style.Title>
          to<span>do</span>
        </Style.Title>
      </Style.RouterLink>
    </Style.Header>
  )
}
