import React, { useContext } from 'react'
import { Center, Flex, Heading } from '@chakra-ui/layout'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CardContext } from '../../contexts/CardContext'

const FormCard = props => {
  const { currentCard, setNextCard } = useContext(CardContext)

  const { title, children, card, secondaryButton = 'back' } = props

  const handleCancel = e => {
    console.log(e)
  }

  const handleNext = e => {
    // setCurrentCard('Categories')
    setNextCard()
  }

  return (
    <Center>
      <Flex
        layerStyle="base"
        py="3"
        flexFlow="column"
        alignItems="center"
        minW="500px"
      >
        <Heading fontSize="xl" color="222222" mb="6">
          {title}
        </Heading>

        {children}

        <ButtonGroup size="md" spacing="4">
          <Button variant="ghost" onClick={handleCancel}>
            {secondaryButton === 'back' ? 'wstecz' : 'anuluj'}
          </Button>
          <Button onClick={handleNext}>Dalej</Button>
        </ButtonGroup>
      </Flex>
    </Center>
  )
}

export default FormCard
