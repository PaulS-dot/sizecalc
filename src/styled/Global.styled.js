import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        font-weight: bold;
        background-color: #FAF7FC;
    }

    * {box-sizing: border-box;}
    *::before {box-sizing: border-box;}
    *::after {box-sizing: border-box;}
`
