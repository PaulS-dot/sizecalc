import { useRadioGroup } from '@chakra-ui/radio'
import React, { useContext } from 'react'
import FormCard from '../FormCard'
import IconSelection from '../IconSelection'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
// import { CardContext } from '../../../contexts/CardContext'
import { HStack } from '../../../styled/utils'

const options = [
  { name: 'woman', label: 'kobieta', icon: AiOutlineWoman },
  { name: 'man', label: 'mężczyzna', icon: AiOutlineMan },
]

const Gender = () => {
  const handleRadioSelect = selection => {
    console.log(selection)
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'gender',
    defaultValue: 'woman',
    onChange: handleRadioSelect,
  })

  const group = getRootProps()

  return (
    <FormCard
      title="Wybierz swoją płeć"
      secondaryButton="cancel"
      card="Gender"
      nextCardPath="/categories"
      prevCardPath="/"
    >
      <HStack spacing="16px" {...group}>
        {options.map(({ name, label, icon }) => {
          const radio = getRadioProps({ value: name })
          return (
            <IconSelection icon={icon} label={label} key={name} {...radio} />
          )
        })}
      </HStack>
    </FormCard>
  )
}

export { Gender }
