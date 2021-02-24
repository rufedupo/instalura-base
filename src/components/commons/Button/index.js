/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `palette.${props.variant}.color`)};;
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `palette.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `palette.${props.variant}.color`)};
`;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  ${(props) => ((props.ghost) ? ButtonGhost : ButtonDefault)};
  ${({ theme }) => breakpointsMedia({
    xs: css`
        ${theme.typographyVariants.smallestException}
      `,
    md: css`
        padding: 12px 43px;
        ${theme.typographyVariants.paragraph1}
      `,
  })};
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: .5;
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
