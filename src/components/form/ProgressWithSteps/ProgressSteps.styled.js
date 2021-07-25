import styled from 'styled-components'

const STEP_CIRCLE_SIZE = '16px'

const StepDot = styled.div`
  background: ${({ color }) => color};
  height: ${STEP_CIRCLE_SIZE};
  width: ${STEP_CIRCLE_SIZE};
  border-radius: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: -25%;
    top: -25%;
    width: 150%;
    height: 150%;
    border: ${({ border }) => border};
    border-radius: 100%;
  }
`

const StepDotLabel = styled.span`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  color: ${({ color }) => color};
  margin-top: 1.5rem;
  text-transform: uppercase;
  font-size: 0.9rem;
`

export { StepDot, StepDotLabel }
