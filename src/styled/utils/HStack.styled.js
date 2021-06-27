import styled from 'styled-components'

const HStack = styled.div`
  display: flex;
  margin-top: ${props => props.mt};

  & *:nth-of-type(n + 2) {
    margin-left: ${props => props.spacing};
  }
  /* justify-content: center; */
`

export default HStack
