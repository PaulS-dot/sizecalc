import { Progress } from '@chakra-ui/progress'
import { Flex, Box, Text } from '@chakra-ui/layout'
import React, { useRef } from 'react'
import theme from '../../../theme/theme'
import { StepDot, StepDotLabel } from './ProgressSteps.styled'

const ProgressStep = ({ children, isDone, isCurrent }) => {
  const color = isDone ? theme.colors.purple[400] : theme.colors.purple[100]
  const border = isCurrent ? `2px solid ${color}` : 'none'
  return (
    <StepDot color={color} border={border}>
      <StepDotLabel color={color}>{children}</StepDotLabel>
    </StepDot>
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
