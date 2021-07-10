import { Box, Heading, Flex, Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { ProgressWithSteps, ProgressStep } from './ProgressSteps'
import { FormHeaderContainer } from './FormHeader.styled'

// <VStack w="100vw" mb="10">
export const FormHeader = props => {
  return (
    <FormHeaderContainer>
      <Heading fontSize="md" mt="8" color="purple.700">
        Przeliczanie rozmiarów
      </Heading>
      <ProgressWithSteps value={props.step}>
        <ProgressStep>płeć</ProgressStep>
        <ProgressStep>kategoria</ProgressStep>
        <ProgressStep>pomiary</ProgressStep>
      </ProgressWithSteps>
    </FormHeaderContainer>
  )
}
