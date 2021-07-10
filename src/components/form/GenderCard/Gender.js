import React from 'react'
import FormCard from '../FormCard/FormCard'
import IconSelection from '../IconSelection/IconSelection'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
// import { CardContext } from '../../../contexts/CardContext'
import { HStack } from '../../../styled/layout'

const options = [
  { name: 'woman', label: 'kobieta', icon: AiOutlineWoman },
  { name: 'man', label: 'mężczyzna', icon: AiOutlineMan },
]

const Gender = () => {
  const handleRadioSelect = selection => {
    console.log(selection)
  }

  return (
    <FormCard
      title="Wybierz swoją płeć"
      secondaryButton="cancel"
      card="Gender"
      description="dj  sdfjojhosud fijosdf iosdfisdf"
      nextCardPath="/categories"
      prevCardPath="/"
    >
      <HStack spacing="16px">
        {options.map(({ name, label, icon }) => {
          return (
            <IconSelection
              radioName="gender"
              icon={icon}
              label={label}
              key={name}
            />
          )
        })}
      </HStack>
    </FormCard>
  )
}

export { Gender }
