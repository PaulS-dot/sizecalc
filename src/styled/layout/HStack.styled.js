import styled from 'styled-components'

export const HStack = styled.div`
  display: flex;
  margin-top: ${props => props.mt};
  justify-content: center;

  & > *:nth-of-type(n + 2) {
    margin-left: ${props => props.spacing};
  }
`
