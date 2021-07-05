import React from 'react'
import { Categories } from '../components/form/cards'
import { FormHeader } from '../components/form/FormHeader'

export const CategoriesFormStep = () => {
  return (
    <>
      <FormHeader step={1}></FormHeader>
      <Categories></Categories>
    </>
  )
}
