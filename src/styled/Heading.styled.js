import styled from 'styled-components'

export const Heading = styled.header`
  color: ${({ theme }) => theme.colors.black};

  & h1 {
    font-size: 1.25rem;
  }

  & h2 {
    font-size: 1.15rem;
  }
`
