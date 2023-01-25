import { styled } from '@mui/material/styles'
import {
  Button as CustomButton,
  TextField as CustomTextField,
} from '@mui/material'

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

export const TextField = styled(CustomTextField, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  '&.MuiTextField-root': {
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    maxWidth: '638px',
    height: '74px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '& .MuiInputBase-root': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      height: '3.375rem',
    },
    '&:hover': {},
    '& .MuiFormLabel-root': {
      border: 'none',
      color: theme.palette.primary.light,
      '&.Mui-focused': {
        top: '8px',
      },
      '&.MuiFormLabel-filled': {
        top: '8px',
      },
    },
    '& .Mui-Focused': {
      top: '12px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 0,
    },
    '& .MuiFormHelperText-root': {
      color: hasError
        ? theme.palette.error.main
        : theme.palette.primary.contrastText,
    },
  },
}))
