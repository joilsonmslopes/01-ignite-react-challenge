import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

export const Header = styled('header')(({ theme }) => ({
  background: theme.palette.grey[700],
  padding: '4.5rem 2rem 5rem',
}))

export const RouterLink = styled(Link)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textDecoration: 'none',
})

export const Title = styled('h1')(({ theme }) => ({
  margin: '0 0 0 0.75rem',
  fontSize: '2.5rem',
  fontWeight: '900',
  lineHeight: '28px',
  color: theme.palette.secondary.main,
  '& span': {
    color: theme.palette.primary.main,
  },
}))

export const Image = styled('img')({})
