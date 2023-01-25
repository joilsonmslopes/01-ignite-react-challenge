import { Palette, styled, Box as CustomBox } from '@mui/material'

type TaskType = 'created' | 'completed'

const getColorByTaskType = (taskType: TaskType, palette: Palette) => {
  const allTasksType = {
    created: palette.secondary.main,
    completed: palette.primary.main,
  }

  return allTasksType[taskType]
}

export const Container = styled('section')({
  width: '100%',
  padding: '0 1rem',
})

export const Content = styled('div')({
  maxWidth: '736px',
  margin: '1rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const ContentHeader = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const FilterAndDeleteTaskWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column-reverse',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

export const EmptyDiv = styled('div')({})

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
  backgroundColor: theme.palette.grey[400],
  color: theme.palette.primary.contrastText,
  fontSize: '0.75rem',
  fontWeight: 'bold',
  borderRadius: '999px',
  padding: '2px 8px',
}))

export const EmptyContent = styled('div')(({ theme }) => ({
  borderRadius: '8px',
  borderTop: `1px solid ${theme.palette.grey[400]}`,
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
}))

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
  color: theme.palette.grey[300],
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
  paddingInlineStart: '0',
})

export const TaskWrapper = styled('li')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1rem',
  backgroundColor: theme.palette.grey[500],
  outline: `1px solid ${theme.palette.grey[400]}`,
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
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,

    '& ~ label': {
      textDecoration: 'line-through',
      color: theme.palette.grey[300],
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

export const DeleteAllTasksButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  marginRight: '16px',
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  marginTop: '0',
  '& svg': {
    marginLeft: '8px',
  },
  [theme.breakpoints.up('md')]: {
    cursor: 'pointer',
    marginTop: '12px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export const Box = styled(CustomBox)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  background: theme.palette.grey[500],
  border: `2px solid ${theme.palette.secondary.main}`,
  boxShadow:
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  padding: '32px',
}))

export const ButtonsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '24px',
  '& button + button': {
    marginLeft: '8px',
  },
})
