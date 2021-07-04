import React, { useContext } from 'react'
// import { Center, Flex, Text } from '@chakra-ui/layout'
import { CardContext } from '../../contexts/CardContext'
import FormCardContainer from '../../styled/FormCard.styled'
import HCenter from '../../styled/utils/HCenter.styled'
import HStack from '../../styled/utils/HStack.styled'
import Heading from '../../styled/Heading.styled'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import { Button } from '../../styled/Button.styled'
import Description from '../../styled/Description.styled'

const FormCard = props => {
  const { currentCard, setNextCard, setPrevCard } = useContext(CardContext)

  const { title, children, card, secondaryButton = 'back' } = props

  const handleBack = e => {
    setPrevCard()
  }

  const handleNext = e => {
    setNextCard()
  }

  return (
    <HCenter>
      <FormCardContainer>
        <Heading>
          <h2> {title} </h2>
        </Heading>
        <Description>{props.description}</Description>

        {children}

        <HStack spacing="16px" mt="32px">
          <Button variant="ghost" onClick={handleBack}>
            {secondaryButton === 'back' ? 'wstecz' : 'anuluj'}
          </Button>
          <Button onClick={handleNext}>Dalej</Button>
        </HStack>
      </FormCardContainer>
    </HCenter>
  )
}

export default FormCard
