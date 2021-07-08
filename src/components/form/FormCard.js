import React, { useContext } from 'react'
// import { Center, Flex, Text } from '@chakra-ui/layout'
import { CardContext } from '../../contexts/CardContext'
import { FormCardContainer } from '../../styled/FormCard.styled'
import { HCenter } from '../../styled/utils/HCenter.styled'
import { HStack } from '../../styled/utils/HStack.styled'
import { H2 } from '../../styled/Headers.styled'
import { Button } from '../../styled/Button.styled'
import { Description } from '../../styled/Description.styled'

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
        <Description></Description>
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
