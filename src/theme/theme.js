import { extendTheme } from '@chakra-ui/react'
import Button from './extendedComponents/Button'
import BoxStyles from './layerStyles/BoxStyles'

const theme = extendTheme({
  components: {
    Button,
  },
  layerStyles: BoxStyles,
})

export default theme
