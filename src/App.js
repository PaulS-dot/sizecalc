import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
// import { Button } from './extendedComponents/Button'
import theme from './theme/theme'
// import { ColorModeSwitcher } from './ColorModeSwitcher'
import AddSizesForm from './components/form/AddSizesForm'
import CardContextProvider from './contexts/CardContext'
import './styles/index.css'

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <CardContextProvider>
      <AddSizesForm />
    </CardContextProvider>
    // </ChakraProvider>
  )
}

export default App
