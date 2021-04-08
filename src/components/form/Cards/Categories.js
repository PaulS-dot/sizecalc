import { HStack } from '@chakra-ui/layout'
import { useRadioGroup } from '@chakra-ui/radio'
import React, { useState } from 'react'
import FormCard from '../FormCard'
import IconSelection from '../IconSelection'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'

const options = [
  { name: 'woman', label: 'kobieta', icon: AiOutlineWoman },
  { name: 'man', label: 'mężczyzna', icon: AiOutlineMan },
]

const Categories = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const handleRadioSelect = selection => {
    console.log(selection)
  }

  //   const { getRootProps, getRadioProps } = useRadioGroup({
  //     name: 'gender',
  //     defaultValue: 'woman',
  //     onChange: handleRadioSelect,
  //   })

  //   const group = getRootProps()

  return (
    <FormCard
      title="Wybierz kategorie"
      secondaryButton="cancel"
      card="Categories"
    >
      <HStack spacing="6" mb="10" /*{...group}*/>
        {options.map(({ name, label, icon }) => {
          // const radio = getRadioProps({ value: name })
          return (
            <IconSelection
              icon={icon}
              label={label}
              key={name}
              isCheckbox={true}
              // {...radio}
            />
          )
        })}
      </HStack>
    </FormCard>
  )
}

export { Categories }
