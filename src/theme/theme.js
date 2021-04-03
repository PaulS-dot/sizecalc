import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import BoxStyles from './layerStyles/BoxStyles'
import { colors } from './colors'

const theme = extendTheme({
  colors,
  fonts: {
    body: 'Montserrat',
    heading: 'Montserrat',
  },

  components: {
    Button,
    Progress: {
      baseStyle: {
        track: {
          bg: 'purple.100',
        },
        filledTrack: {
          bg: 'purple.400',
        },
      },
    },
  },

  layerStyles: BoxStyles,
})

export default theme
