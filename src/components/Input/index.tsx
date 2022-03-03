import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import useDebounce from '../../hooks/useDebounce'

import * as Styles from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  iconColor?: string
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  iconColor,
  onChange,
  ...rest
}) => {
  const debouncedFn = useDebounce(onChange, 500)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFn(event)
  }

  return (
    <Styles.Container>
      {Icon && <Icon size={20} color={iconColor} />}
      <input {...rest} onChange={handleOnChange} />
    </Styles.Container>
  )
}

export default Input
