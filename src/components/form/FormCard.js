import React, { useContext } from 'react'
import { Center, Flex, Heading, Text } from '@chakra-ui/layout'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CardContext } from '../../contexts/CardContext'
import StyledFormCard from '../../styled/FormCard.styled'
import HCenter from '../../styled/HCenter.styled'

const FormCard = props => {
  const { currentCard, setNextCard, setPrevCard } = useContext(CardContext)

  const { className, title, children, card, secondaryButton = 'back' } = props

  const handleBack = e => {
    setPrevCard()
  }

  const handleNext = e => {
    setNextCard()
  }

  return (
    <HCenter>
      <StyledFormCard>
      {/* <Center>
        <Flex
          layerStyle="base"
          py="3"
          flexFlow="column"
          alignItems="center"
          minW="500px"
          px="10"
        > */}
          <Heading fontSize="xl" color="222222" mb="1">
            {title}
          </Heading>
          <Text fontSize="xs" mb="6" color="gray.800" opacity="30%">
            {props.description}
          </Text>
          {children}
          <ButtonGroup size="md" spacing="4" mt="10">
            <Button variant="ghost" onClick={handleBack}>
              {secondaryButton === 'back' ? 'wstecz' : 'anuluj'}
            </Button>
            <Button onClick={handleNext}>Dalej</Button>
          </ButtonGroup>
        {/* </Flex>
      </Center> */}
      </StyledFormCard>

    </HCenter>
  )
}

export default FormCard
