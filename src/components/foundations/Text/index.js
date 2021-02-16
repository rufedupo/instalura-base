import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../theme'

const TextBase = styled.span`
  ${({variant}) => theme.typographyVariants[variant]}
`

const Text = ({ tag, variant, children }) => {
  return (
    <TextBase
      as={tag}
      variant={variant}
    >
      {children}
    </TextBase>
  )
}

Text.propType = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
}

export default Text