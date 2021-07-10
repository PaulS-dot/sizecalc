import { Input } from '@chakra-ui/input'
import React from 'react'
import FormCard from '../FormCard/FormCard'

const Measures = () => {
  return (
    <FormCard
      title="Pomiary"
      description="Teraz tylko zbierz pomiary aby zobaczyć jakie rozmiary będą dla Ciebie odpowiednie!"
    >
      <Input></Input>
    </FormCard>
  )
}

export { Measures }
