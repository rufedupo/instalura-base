/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${(props) => props.theme.typographyVariants[props.variant]}
  color: ${(props) => get(props.theme, `palette.${props.color}.color`)};

  ${propToStyle('textAlign')}
`;

const Text = ({
  tag, variant, children, ...props
}) => (
  <TextBase
    as={tag}
    variant={variant}
    {...props}
  >
    {children}
  </TextBase>
);

Text.propType = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};

export default Text;
