import { Box, HStack, VStack } from '@chakra-ui/layout'
import React, { useState, useContext } from 'react'
import { useRadioGroup } from '@chakra-ui/radio'
import FormHeader from './FormHeader'
import { Gender, Categories, Measures } from './cards'
import { CardContext } from '../../contexts/CardContext'

// const cards = ['Gender', 'Categories', 'Measures']

const DisplayCard = ({ currentCard }) => {
  if (!currentCard) return ''

  if (currentCard === 'Gender') return <Gender></Gender>
  else if (currentCard === 'Categories') return <Categories></Categories>
  return <Measures></Measures>

  // return React.createElement(cards[currentCard])
}

const AddSizesForm = () => {
  const { currentCard, currentCardIndex } = useContext(CardContext)
  console.log(
    currentCard,
    currentCardIndex,
    // cards.findIndex(card => currentCard),
  )
  // const [currentCard, setCurrentCard] = useState('Gender')

  return (
    <VStack>
      <FormHeader step={currentCardIndex}></FormHeader>
      <DisplayCard currentCard={currentCard}></DisplayCard>
    </VStack>
  )
}

export default AddSizesForm
