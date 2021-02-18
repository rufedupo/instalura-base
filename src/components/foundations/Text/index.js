import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextBase = styled.span`
  ${(props) => props.theme.typographyVariants[props.variant]}
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