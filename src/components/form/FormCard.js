import React from 'react'
import { Center, Flex, Heading } from '@chakra-ui/layout'
import { Button, ButtonGroup } from '@chakra-ui/react'

const FormCard = props => {
  const { title, children, secondaryButton = 'back' } = props
  console.log(props)

  return (
    <Center>
      <Flex
        layerStyle="base"
        py="3"
        flexFlow="column"
        alignItems="center"
        minW="500px"
      >
        <Heading fontSize="xl" color="222222" mb="6">
          {title}
        </Heading>

        {children}

        <ButtonGroup size="md" spacing="4">
          <Button variant="ghost">
            {secondaryButton === 'back' ? 'wstecz' : 'anuluj'}
          </Button>
          <Button>Dalej</Button>
        </ButtonGroup>
      </Flex>
    </Center>
  )
}

export default FormCard
