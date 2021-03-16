import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
  Button,
} from '@chakra-ui/react'
// import { Button } from './extendedComponents/Button'
import theme from './theme/theme'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import AddSizesForm from './components/form/AddSizesForm'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#FAF7FC" minH="100vh">
        <AddSizesForm />
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
