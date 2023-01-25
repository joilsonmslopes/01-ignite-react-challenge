import { Palette, styled } from '@mui/material'

type TaskType = 'created' | 'completed'

const getColorByTaskType = (taskType: TaskType, palette: Palette) => {
  const allTasksType = {
    created: palette.secondary.main,
    completed: '#8284fa',
  }

  return allTasksType[taskType]
}

export const Container = styled('section')({
  width: '100%',
  padding: '0 1rem',
})

export const Content = styled('div')({
  maxWidth: '736px',
  margin: '4rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const ContentHeader = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const HeaderTitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
})

export const HeaderTitle = styled('h1', {
  shouldForwardProp: (props) => props !== 'color',
})<{ tasktype: TaskType }>(({ tasktype: taskType, theme }) => ({
  fontSize: '0.875rem',
  color: getColorByTaskType(taskType, theme.palette),
  fontWeight: 700,
}))

export const Span = styled('span')(({ theme }) => ({
  backgroundColor: '#333333',
  color: theme.palette.primary.contrastText,
  fontSize: '0.75rem',
  fontWeight: 'bold',
  borderRadius: '999px',
  padding: '2px 8px',
}))

export const EmptyContent = styled('div')({
  borderRadius: '8px',
  borderTop: '1px solid #333333',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
})

export const ImageWrapper = styled('div')({
  width: '3.5rem',
  height: '3.5rem',
  objectFit: 'contain',
})

export const Image = styled('img')({
  width: '100%',
  height: '100%',
})

export const EmptyContentMessage = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: '1.375rem',
  color: theme.palette.primary.light,
  '& strong': {
    fontWeight: 700,
  },
  '& p': {
    fontWeight: 400,
  },
}))

export const FilledContent = styled('ul')({
  listStyle: 'none',
  boxSizing: 'content-box',
})

export const TaskWrapper = styled('li')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1rem',
  backgroundColor: theme.palette.primary.main,
  outline: '1px solid #333333',
  '& + li': {
    marginTop: '16px',
  },
}))

export const LabelWrapper = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    cursor: 'pointer',
  },
}))

export const Label = styled('label')(({ theme }) => ({
  marginLeft: '0.75rem',
  fontSize: '0.875rem',
  color: theme.palette.primary.contrastText,
  userSelect: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  [theme.breakpoints.up('md')]: {
    cursor: 'pointer',
  },
}))

export const CheckBox = styled('input')(({ theme }) => ({
  WebkitAppearance: 'none',
  appearance: 'none',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: '0',
  border: `0.125rem solid ${theme.palette.secondary.main}`,
  borderRadius: '50%',
  width: '1.125rem',
  height: '1.125rem',
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: '3px',
    display: 'block',
    borderLeft: `1px solid ${theme.palette.primary.contrastText}`,
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    width: '7px',
    height: '4px',
    transform: 'rotate(-45deg)',
    opacity: '0',
  },
  '&:checked': {
    background: '#8284fa',
    borderColor: '#8284fa',

    '& ~ label': {
      textDecoration: 'line-through',
      color: theme.palette.primary.light,
    },
    '&::before': {
      opacity: 1,
    },
  },
  [theme.breakpoints.up('md')]: {
    cursor: 'pointer',
  },
}))

export const Button = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  [theme.breakpoints.up('md')]: {
    cursor: 'pointer',
  },
}))
