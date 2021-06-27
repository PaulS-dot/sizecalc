import React, { useContext } from 'react'
import { Center, Flex, Text } from '@chakra-ui/layout'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CardContext } from '../../contexts/CardContext'
import FormCardContainer from '../../styled/FormCard.styled'
import HCenter from '../../styled/HCenter.styled'
import Heading from '../../styled/Heading.styled'
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
        {/* <Heading fontSize="xl" color="222222" mb="1">
            {title}
          </Heading> */}
        <Heading>
          <h2> {title} </h2>
        </Heading>
        {/* <Text fontSize="xs" mb="6" color="gray.800" opacity="30%"> */}
        <Description>{props.description}</Description>
        {/* </Text> */}
        {children}
        <ButtonGroup size="md" spacing="4" mt="10">
          <Button variant="ghost" onClick={handleBack}>
            {secondaryButton === 'back' ? 'wstecz' : 'anuluj'}
          </Button>
          <Button onClick={handleNext}>Dalej</Button>
        </ButtonGroup>
      </FormCardContainer>
    </HCenter>
  )
}

export default FormCard
