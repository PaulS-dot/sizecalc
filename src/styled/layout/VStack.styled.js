import styled from 'styled-components'

export const VStack = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: ${props => props.mt};
  justify-content: center;

  & *:nth-of-type(n + 2) {
    margin-top: ${props => props.spacing};
  }
`
