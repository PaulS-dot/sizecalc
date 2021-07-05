import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        font-weight: bold;
        background-color: #FAF7FC;
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    input, textarea, button {font-family: inherit}

    * {box-sizing: border-box;}
    *::before {box-sizing: border-box;}
    *::after {box-sizing: border-box;}
`
