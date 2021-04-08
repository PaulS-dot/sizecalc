import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
// import { Button } from './extendedComponents/Button'
import theme from './theme/theme'
// import { ColorModeSwitcher } from './ColorModeSwitcher'
import AddSizesForm from './components/form/AddSizesForm'
import CardContextProvider from './contexts/CardContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#FAF7FC" minH="100vh" fontWeight="bold">
        <CardContextProvider>
          <AddSizesForm />
        </CardContextProvider>
        {/* <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Button>bruh</Button>
          <Button size="sm" variant="solid">
            Click me
          </Button>
        </VStack> */}
      </Box>
    </ChakraProvider>
  )
}

export default App
