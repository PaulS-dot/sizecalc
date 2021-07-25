import styled from 'styled-components'
import { VStack } from 'src/styled/layout'
import { H1 } from 'src/styled/Headers.styled'

const FormHeaderContainer = styled(VStack)`
  width: 100vw;
  margin-bottom: 3rem;
`

const Heading = styled(H1)`
  margin: 1rem 0;
  ${props => props.theme.colors[700]};
`

export { FormHeaderContainer, Heading }
