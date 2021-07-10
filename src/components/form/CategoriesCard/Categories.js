import { HStack } from '@chakra-ui/layout'
import { useCheckboxGroup } from '@chakra-ui/checkbox'
import React, { useState } from 'react'
import FormCard from '../FormCard/FormCard'
import IconCheckbox from '../IconCheckbox'
import categoriesOptions from './categoriesOptions'

const Categories = ({ setCategories }) => {
  const handleRadioSelect = selection => {
    console.log(selection)
    setCategories(selection)
  }

  const { getCheckboxProps } = useCheckboxGroup({
    name: 'categories',
    onChange: handleRadioSelect,
  })

  return (
    <FormCard
      title="Wybierz kategorie"
      card="Categories"
      nextCardPath="/measures"
      prevCardPath="/gender"
    >
      <HStack spacing="6" /*{...group}*/>
        {categoriesOptions.map(({ name, label, iconPath }) => {
          const checkbox = getCheckboxProps({ value: name })
          return (
            <IconCheckbox
              iconPath={iconPath}
              label={label}
              key={name}
              name={name}
              setCategories={setCategories}
              {...checkbox}
            />
          )
        })}
      </HStack>
    </FormCard>
  )
}

export { Categories }
