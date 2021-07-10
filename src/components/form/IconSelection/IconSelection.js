import React from 'react'
import { IconContext } from 'react-icons/lib'
import {
  IconWrapper,
  IconSelectionLabel,
  StyledIconSelection,
} from './IconSelection.styled'
import { InvisibleInput } from 'src/styled/utils'

const IconSelection = props => {
  const { icon: Icon, label, radioName } = props
  console.log(label)
  return (
    <StyledIconSelection spacing="0.1rem">
      <InvisibleInput type="radio" name={radioName} />
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <IconSelectionLabel>{label}</IconSelectionLabel>
    </StyledIconSelection>
  )
}

export default IconSelection
