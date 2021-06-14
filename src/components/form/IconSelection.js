import Icon from '@chakra-ui/icon'
import { VStack, Text, Center, Box } from '@chakra-ui/layout'
import { useRadio } from '@chakra-ui/radio'
import React from 'react'
import { IconContext } from 'react-icons/lib'
import theme from '../../theme/theme'

const IconSelection = props => {
  const { icon, label } = props
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <VStack role="group" cursor="pointer" {...checkbox}>
        <Center
          w="80px"
          h="80px"
          borderColor="gray.50"
          borderWidth="2px"
          borderRadius="10px"
          _groupHover={{
            borderColor: 'gray.400',
          }}
          _groupChecked={{
            borderColor: 'purple.400',
          }}
          // _groupFocus={{
          //   shadow: 'outline',
          // }}
          transition="all 0.1s ease-out"
        >
          <Icon
            as={icon}
            boxSize="60px"
            color="gray.300"
            _groupChecked={{ color: 'gray.700' }}
          />
        </Center>
        <Text
          fontSize="xs"
          color="gray.300"
          _groupChecked={{ color: 'gray.700' }}
        >
          {label}
        </Text>
      </VStack>
    </Box>
  )
}

export default IconSelection
