import styled from 'styled-components'
import { VStack } from './utils'

export const IconWrapper = styled.div`
  & > svg {
    width: 5rem;
    height: 5rem;
    border: 2px solid ${({ theme }) => theme.colors.gray[50]};
    border-radius: 1rem;
    padding: 0.5rem;
    transition: all 0.1s ease-out;
  }
`

export const IconSelectionLabel = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: normal;
`

export const StyledIconSelection = styled(VStack)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[300]};

  &:hover svg {
    border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  }
`
//     <Center
//       w="80px"
//       h="80px"
//       borderColor="gray.50"
//       borderWidth="2px"
//       borderRadius="10px"
//       _groupHover={{
//         borderColor: 'gray.400',
//       }}
//       _groupChecked={{
//         borderColor: 'purple.400',
//       }}
//       // _groupFocus={{
//       //   shadow: 'outline',
//       // }}
//       transition="all 0.1s ease-out"
//     >
//       <Icon
//         as={icon}
//         boxSize="60px"
//         color="gray.300"
//         _groupChecked={{ color: 'gray.700' }}
//       />
//     </Center>
//     <Text
//       fontSize="xs"
//       color="gray.300"
//       _groupChecked={{ color: 'gray.700' }}
//     >
