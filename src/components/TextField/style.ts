import { styled } from '@mui/material/styles'
import { TextField as CustomTextField } from '@mui/material'

export const TextField = styled(CustomTextField, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'hasError',
})<{ hasError: boolean; maxwidth?: string }>(
  ({ theme, hasError, maxwidth }) => ({
    '&.MuiTextField-root': {
      overflow: 'hidden',
      borderRadius: theme.shape.borderRadius,
      width: '100%',
      maxWidth: '100%',
      height: '74px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      [theme.breakpoints.up('md')]: {
        maxWidth: maxwidth,
      },
      '& .MuiInputBase-root': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.grey[500],
        padding: '0.5rem',
      },
      '& .MuiInputBase-root .MuiInputBase-input': {
        padding: '0.5rem',
      },
      '& .MuiFormLabel-root': {
        border: 'none',
        color: theme.palette.grey[300],
        background: 'transparent',
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
  })
)
