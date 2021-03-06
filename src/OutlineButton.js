import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Button from './Button'
import theme from './theme'

const OutlineButton = styled(Button)`
  color: ${props => props.theme.getColor('secondaryButtonTextColor')};
  box-shadow: inset 0 0 0 2px
    ${props => props.theme.getColor('primaryButtonBgColor')};
  background-color: transparent;

  &:hover {
    color: ${props =>
      props.disabled ? null : props.theme.getColor('secondaryButtonTextColor')};
    box-shadow: inset 0 0 0 2px
      ${props =>
        props.disabled
          ? null
          : props.theme.getColor('primaryButtonTextHoverColor')};
    background-color: transparent;
  }
`

OutlineButton.defaultProps = {
  theme: theme
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
