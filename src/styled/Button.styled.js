import styled from 'styled-components'

const handleButtonType = variant => {
  console.log(variant)
  switch (variant) {
    case 'ghost':
      return `
        color: #e8bef6;

        &:hover {
          color: #c569e3;
          background: #fbefff;
        }

      `

    default:
      return `
      background: linear-gradient(90deg, #bf5ae0 0%, #a811da 100%);
      color: white;
      &:hover {
        opacity: 0.9;
      }
      `
  }
}

/**
 * @param {string} variant change button type
 */
export const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  border-radius: 8px;
  width: 7.2rem;
  transition: all 0.1s ease-out;

  ${({ variant }) => handleButtonType(variant)}
`
