import Icon, { createIcon } from '@chakra-ui/icon'
import { VStack, Text, Center, Box } from '@chakra-ui/layout'
import { Checkbox, useCheckbox } from '@chakra-ui/checkbox'
import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import theme from '../../theme/theme'

const IconCheckbox = props => {
  const { iconPath, label, setCategories, name } = props
  const [isChecked, setIsChecked] = useState(false)

  const { getInputProps, getCheckboxProps } = useCheckbox(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const color = isChecked ? 'gray.700' : 'gray.300'

  const FinalIcon = createIcon({
    // displayName: 'UpDownIcon',
    d: iconPath,
  })

  return (
    <Box as="label">
      <input {...input} />

      <VStack role="group" cursor="pointer" {...checkbox} name={name}>
        {/* <Checkbox
          pos="absolute"
          m="2"
          left="2"
          value="x"
          colorScheme="purple"
          size="sm"
          // sx={{
          //   '& > .chakra-checkbox__control': {
          //     boxShadow: 'none !important',
          //     outline: 'none !important',
          //     borderColor: 'gray.50',
          //     borderRadius: 'full',
          //     p: '5px',
          //   },
          //   '& > .chakra-checkbox__control[data-checked]': {
          //     borderColor: 'purple.500',
          //   },
          // }}
        ></Checkbox> */}
        <Center
          _groupHover={{
            borderColor: isChecked ? 'purple.200' : 'gray.400',
          }}
          _groupChecked={{
            borderColor: 'purple.400',
          }}
          w="80px"
          h="80px"
          borderColor={isChecked ? 'purple.400' : 'gray.50'}
          borderWidth="2px"
          borderRadius="10px"
          transition="all 0.1s ease-out"
        >
          {/* <FinalIcon></FinalIcon> */}
          <Icon
            as={FinalIcon}
            boxSize="50px"
            _groupChecked={{ color: 'gray.700' }}
            color="gray.300"
          />
        </Center>
        <Text fontSize="xs" color={color} _groupChecked={{ color: 'gray.700' }}>
          {label}
        </Text>
      </VStack>
    </Box>
  )
}

export default IconCheckbox
