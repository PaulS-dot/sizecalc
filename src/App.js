import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
// import { Button } from './extendedComponents/Button'
import theme from './theme/theme'
// import { ColorModeSwitcher } from './ColorModeSwitcher'
import AddSizesForm from './components/form/AddSizesForm'
import CardContextProvider from './contexts/CardContext'
import { GlobalStyles } from './styled/Global.styled'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CardContextProvider>
        <AddSizesForm />
      </CardContextProvider>
    </ThemeProvider>
    // </ChakraProvider>
  )
}

export default App
