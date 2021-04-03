import { Box, HStack, VStack } from '@chakra-ui/layout'
import React from 'react'
import IconSelection from './IconSelection'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
import FormCard from './FormCard'
import { useRadioGroup } from '@chakra-ui/radio'
import FormHeader from './FormHeader'

const AddSizesForm = () => {
  const options = [
    { name: 'woman', label: 'kobieta', icon: AiOutlineWoman },
    { name: 'man', label: 'mężczyzna', icon: AiOutlineMan },
  ]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'gender',
    defaultValue: 'woman',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <VStack>
      <FormHeader step={0}></FormHeader>
      <FormCard title="Wybierz swoją płeć" secondaryButton="cancel">
        <HStack spacing="6" mb="10" {...group}>
          {options.map(({ name, label, icon }) => {
            const radio = getRadioProps({ value: name })
            return (
              <IconSelection icon={icon} label={label} key={name} {...radio} />
            )
          })}
        </HStack>
      </FormCard>
    </VStack>
  )
}

export default AddSizesForm
