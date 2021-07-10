import { Box, Heading, VStack, Flex, Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { ProgressWithSteps, ProgressStep } from './ProgressSteps'

export const FormHeader = props => {
  return (
    <VStack w="100vw" mb="10">
      <Heading fontSize="md" mt="8" color="purple.700">
        Przeliczanie rozmiarów
      </Heading>
      <ProgressWithSteps value={props.step}>
        <ProgressStep>płeć</ProgressStep>
        <ProgressStep>kategoria</ProgressStep>
        <ProgressStep>pomiary</ProgressStep>
      </ProgressWithSteps>
    </VStack>
  )
}
