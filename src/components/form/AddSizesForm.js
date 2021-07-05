import { VStack } from '@chakra-ui/layout'
import React, { useState, useContext, useRef } from 'react'
import FormHeader from './FormHeader'
import { Gender, Categories, Measures } from './cards'
import { CardContext } from '../../contexts/CardContext'
import { Route, Switch } from 'react-router-dom'
import { GenderFormStep } from 'src/pages/GenderFormStep'

// const cards = ['Gender', 'Categories', 'Measures']

// const DisplayCard = ({ currentCard }) => {
//   // const [categories, setCategories] = useState([])
//   const categories = useRef([])
//   const setCategories = category => {
//     console.log(category)
//   }

//   if (!currentCard) return ''

//   if (currentCard === 'Gender') return <Gender></Gender>
//   else if (currentCard === 'Categories')
//     return <Categories setCategories={setCategories}></Categories>
//   return <Measures categories={categories}></Measures>

//   // return React.createElement(cards[currentCard])
// }

const AddSizesForm = () => {
  const { currentCard, currentCardIndex } = useContext(CardContext)

  return (
    // <>
    //   <FormHeader step={currentCardIndex}></FormHeader>
    //   <DisplayCard currentCard={currentCard}></DisplayCard>
    // </>

    <Switch>
      <Route path="/categories"></Route>
      <Route path="/">
        <GenderFormStep></GenderFormStep>
      </Route>
    </Switch>
  )
}

export default AddSizesForm
