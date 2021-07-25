import React from 'react'
import {
  ProgressWithSteps,
  ProgressStep,
} from '../ProgressWithSteps/ProgressSteps'
import { FormHeaderContainer } from './FormHeader.styled'
import { Heading } from './FormHeader.styled'

export const FormHeader = props => {
  return (
    <FormHeaderContainer>
      <Heading>Przeliczanie rozmiarów</Heading>
      <ProgressWithSteps value={props.step}>
        <ProgressStep>płeć</ProgressStep>
        <ProgressStep>kategoria</ProgressStep>
        <ProgressStep>pomiary</ProgressStep>
      </ProgressWithSteps>
    </FormHeaderContainer>
  )
}
