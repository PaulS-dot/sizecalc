import { Box, HStack, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import IconSelection from './IconSelection'
import FormCard from './FormCard'
import { useRadioGroup } from '@chakra-ui/radio'
import FormHeader from './FormHeader'
import { Gender, Categories, Measures } from './Cards'

const cards = ['gender', 'categories', 'measures']

const AddSizesForm = () => {
  return (
    <VStack>
      <Gender></Gender>
    </VStack>
  )
}

export default AddSizesForm
