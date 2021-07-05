import { Link } from 'react-router-dom'
import styled from 'styled-components'

const handleButtonType = props => {
  switch (props.variant) {
    case 'ghost':
      return `
        color: ${props.theme.colors.purple[100]};

        &:hover {
          color: ${props.theme.colors.purple[300]};
          background: ${props.theme.colors.purple[10]};
        }

      `

    default:
      return `
      background: ${props.theme.colors.purple.gradient};
      color: ${props.theme.colors.white};
      &:hover {
        opacity: 0.9;
      }
      `
  }
}

/**
 * @param {string} variant change button type
 */
export const Button = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  border-radius: 8px;
  width: 7.2rem;
  transition: all 0.1s ease-out;
  font-size: 1rem;

  ${props => handleButtonType(props)}
`
