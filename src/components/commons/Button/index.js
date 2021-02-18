import styled, { css }  from "styled-components"
import get from 'lodash/get'
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

const ButtonGhost = css`
  color: ${(props) => { return get(props.theme, `palette.${props.variant}.color`);}};;
  background-color: transparent;
`

const ButtonDefault = css`
  color: ${(props) => { return get(props.theme, `palette.${props.variant}.contrastText`);}};
  background-color: ${(props) => { return get(props.theme, `palette.${props.variant}.color`);}};
`

export const Button = styled.button`
  ${(props) => (props.ghost) ? ButtonGhost : ButtonDefault };
  ${({theme}) => {
    return breakpointsMedia({
      xs: css`
        ${theme.typographyVariants.smallestException}
      `,
      md: css`
        padding: 12px 43px;
        ${theme.typographyVariants.paragraph1}
      `
    })
  }};
  font-weight: bold;
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
`