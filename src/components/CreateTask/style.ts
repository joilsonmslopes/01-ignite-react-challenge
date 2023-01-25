import { styled } from '@mui/material/styles'
import { Button as CustomButton } from '@mui/material'

export const CreateTaskWrapper = styled('form')({
  width: '100%',
  display: 'flex',
  margin: 'calc(1px - 0.25rem - 27px) auto 0',
  alignItems: ' flex-start',
  justifyContent: 'center',
  padding: '0 1rem',
  columnGap: '8px',
  '& button > svg': {
    marginLeft: '8px',
    flexShrink: 0,
  },
})

export const Button = styled(CustomButton)(({ theme: { palette } }) => ({
  background: palette.secondary.dark,
  color: palette.primary.contrastText,
  fontSize: '0.75rem',
  fontWeight: 700,
  lineHeight: 0,
  height: '3.375rem',
  padding: '1rem',
  '&:hover': {
    background: palette.secondary.main,
  },
}))
