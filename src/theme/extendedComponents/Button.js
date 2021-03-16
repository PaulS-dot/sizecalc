import React from 'react'
import { extendTheme, useStyleConfig } from '@chakra-ui/react'
import {
  Box,
  // Button,
} from '@chakra-ui/react'

const Button = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
    textTransform: 'uppercase',
  },
  // 3. We can add a new visual variant
  variants: {
    // "with-shadow": {
    //   bg: "red.400",
    //   boxShadow: "0 0 2px 2px #efdfde",
    // },
    // 4. We can override existing variants
    solid: props => ({
      //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
      bgGradient: 'linear(to-l, #BF5AE0, #A811DA)',

      _hover: {
        bgGradient: 'linear(to-r, #BF5AE0, #A811DA)',
      },
      _active: {
        bg: 'transparent',
      },
    }),
  },
}

export default Button
