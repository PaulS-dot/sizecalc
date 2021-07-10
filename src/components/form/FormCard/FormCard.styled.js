import styled from 'styled-components'

export const FormCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 16px 32px 12px;
  min-width: 500px;
  background: ${({ theme }) => theme.colors.white};
  /* border: 1px solid ${({ theme }) => theme.colors.purple['50']}; */
  border: 1px solid #e5e2f0;
  border-radius: 20px;
`
