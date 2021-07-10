import React from 'react'
import { Categories } from '../components/form/CategoriesCard/Categories'
import { FormHeader } from '../components/form/FormHeader/FormHeader'

export const CategoriesFormStep = () => {
  return (
    <>
      <FormHeader step={1}></FormHeader>
      <Categories></Categories>
    </>
  )
}
