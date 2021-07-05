import React from 'react'
import { Gender } from '../components/form/cards'
import { FormHeader } from '../components/form/FormHeader'

export const GenderFormStep = () => {
  return (
    <>
      <FormHeader step={0}></FormHeader>
      <Gender></Gender>
    </>
  )
}
