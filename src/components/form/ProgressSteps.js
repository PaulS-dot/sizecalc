import { Progress } from '@chakra-ui/progress'
import { Flex, Box, Text } from '@chakra-ui/layout'
import React, { useRef } from 'react'
import theme from '../../theme/theme'

const STEP_CIRCLE_SIZE = 4

const ProgressStep = ({ children, isDone, isCurrent }) => {
  const color = isDone ? 'purple.400' : 'purple.100'
  return (
    <Box
      bg={color}
      h={STEP_CIRCLE_SIZE}
      w={STEP_CIRCLE_SIZE}
      borderRadius="full"
      pos="relative"
      _after={{
        content: '""',
        pos: 'absolute',
        left: '-25%',
        top: '-25%',
        w: '150%',
        h: '150%',
        border: isCurrent ? `2px solid ${theme.colors.purple[400]}` : 'none',
        borderRadius: 'full',
      }}
    >
      <Text
        pos="absolute"
        transform="translateX(-50%)"
        left="50%"
        color={color}
        mt="5"
        fontSize="xs"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </Box>
  )
}

const ProgressWithSteps = props => {
  const { children, value } = props
  const lastStep = useRef(children.length - 1)

  return (
    <Flex align="center" pos="relative" w="300px">
      <Progress
        w="100%"
        pos="absolute"
        h="6px"
        value={value}
        min="0"
        max={lastStep.current}
      ></Progress>
      <Flex justify="space-between" w="100%">
        {children.map((child, i) =>
          React.cloneElement(child, {
            isDone: value >= i,
            isCurrent: value === i,
            key: i,
          }),
        )}
      </Flex>
    </Flex>
  )
}

export { ProgressWithSteps, ProgressStep }
