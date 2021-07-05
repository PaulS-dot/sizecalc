import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
// import { Button } from './extendedComponents/Button'
import theme from './theme/theme'
// import { ColorModeSwitcher } from './ColorModeSwitcher'
import AddSizesForm from './components/form/AddSizesForm'
import CardContextProvider from './contexts/CardContext'
import { GlobalStyles } from './styled/Global.styled'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    // <ChakraProvider theme={theme}>

    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CardContextProvider>
            <AddSizesForm />
          </CardContextProvider>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
    // </ChakraProvider>
  )
}

export default App
