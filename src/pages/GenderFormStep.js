import React from 'react'
import { Gender } from '../components/form/GenderCard/Gender'
import { FormHeader } from '../components/form/FormHeader/FormHeader'

export const GenderFormStep = () => {
  return (
    <>
      <FormHeader step={0}></FormHeader>
      <Gender></Gender>
    </>
  )
}
