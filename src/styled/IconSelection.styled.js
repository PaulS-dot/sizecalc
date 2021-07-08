import styled from 'styled-components'
import { VStack } from './utils'

export const IconWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 1rem;
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  transition: all 0.1s ease-out;

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const IconSelectionLabel = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: normal;
`

export const StyledIconSelection = styled(VStack)`
  position: relative;
  color: ${({ theme }) => theme.colors.gray[300]};

  & input:checked ~ * {
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  & input:checked ~ ${IconWrapper} {
    border: 2px solid purple;
  }

  &:hover ${IconWrapper} {
    border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  }
`
