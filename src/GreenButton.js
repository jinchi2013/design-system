import styled from 'styled-components'
import Button from './Button'
import theme from './theme'

const GreenButton = styled(Button)`
  background-color: ${props => props.theme.getColor(secondarybuttonBgColor)};

  &:hover {
    background-color: ${props =>
      props.disabled
        ? null
        : props.theme.getColor(secondaryButtonBgHoverColor)};
  }
`

GreenButton.defaultProps = {
  theme: theme
}

GreenButton.displayName = 'GreenButton'

export default GreenButton
