import { BaseTextFieldProps } from '@mui/material'
import { FC } from 'react'
import * as Style from './style'

interface CustomError {
  hasError: boolean
  errorMessage: string
}

interface TextFieldProps extends BaseTextFieldProps {
  label: string
  customError?: CustomError
  maxwidth?: string
  handleChangeInputValue: (value: string) => void
}

export const TextField: FC<TextFieldProps> = ({
  label,
  customError,
  value,
  maxwidth = '638px',
  handleChangeInputValue,
  ...props
}) => (
  <Style.TextField
    label={label}
    {...props}
    value={value}
    onChange={(event) => handleChangeInputValue(event.target.value)}
    helperText={customError?.hasError ? customError.errorMessage : ''}
    hasError={customError?.hasError as boolean}
    maxwidth={maxwidth}
  />
)
