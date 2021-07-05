import { VStack } from '@chakra-ui/layout'
import React, { useState, useContext, useRef } from 'react'
import FormHeader from './FormHeader'
import { Gender, Categories, Measures } from './cards'
import { CardContext } from '../../contexts/CardContext'
import { Route, Switch } from 'react-router-dom'
import { GenderFormStep, CategoriesFormStep } from 'src/pages'

const AddSizesForm = () => {
  const { currentCard, currentCardIndex } = useContext(CardContext)

  return (
    <Switch>
      <Route path="/categories">
        <CategoriesFormStep></CategoriesFormStep>
      </Route>
      <Route path="/gender">
        <GenderFormStep></GenderFormStep>
      </Route>
      <Route path="/">
        <GenderFormStep></GenderFormStep>
      </Route>
    </Switch>
  )
}

export default AddSizesForm
