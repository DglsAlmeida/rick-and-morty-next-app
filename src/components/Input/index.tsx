import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

import * as Styles from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  iconColor?: string
}

const Input: React.FC<InputProps> = ({ icon: Icon, iconColor, ...rest }) => {
  return (
    <Styles.Container>
      {Icon && <Icon size={20} color={iconColor} />}
      <input {...rest} />
    </Styles.Container>
  )
}

export default Input
