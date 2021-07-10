import React from 'react'
import { FormCardContainer } from './FormCard.styled'
import { HCenter } from 'src/styled/layout/HCenter.styled'
import { HStack } from 'src/styled/layout/HStack.styled'
import { H2 } from 'src/styled/Headers.styled'
import { Button } from 'src/styled/Button.styled'
import { Description } from 'src/styled/Description.styled'

const FormCard = props => {
  const {
    title,
    children,
    secondaryButton = 'back',
    nextCardPath,
    prevCardPath,
    description,
  } = props

  return (
    <HCenter>
      <FormCardContainer>
        <H2>{title}</H2>
        <Description>{description}</Description>
        {/* {description ? <Descriptio1n>{description}</Description> : null} */}

        {children}

        <HStack spacing="16px" mt="32px">
          <Button variant="ghost" to={prevCardPath}>
            {secondaryButton === 'back' ? 'wstecz' : 'anuluj'}
          </Button>
          <Button to={nextCardPath}>Dalej</Button>
        </HStack>
      </FormCardContainer>
    </HCenter>
  )
}

export default FormCard
