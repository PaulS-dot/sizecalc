import { Link } from 'react-router-dom'
import styled from 'styled-components'

const handleButtonType = ({ theme, variant }) => {
  switch (variant) {
    case 'ghost':
      return `
        color: ${theme.colors.purple[100]};

        &:hover {
          color: ${theme.colors.purple[300]};
          background: ${theme.colors.purple[10]};
        }

      `

    default:
      return `
      background: ${theme.colors.purple.gradient};
      color: ${theme.colors.white};
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  ${props => handleButtonType(props)}
`
