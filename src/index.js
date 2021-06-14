import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import 'focus-visible/dist/focus-visible'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
