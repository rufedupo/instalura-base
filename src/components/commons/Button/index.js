import styled, { css }  from "styled-components"
import get from 'lodash/get'

const ButtonGhost = css`
  color: ${(props) => { return get(props.theme, `colors.${props.variant}.color`);}};;
  background-color: transparent;
`

const ButtonDefault = css`
  color: ${(props) => { return get(props.theme, `colors.${props.variant}.contrastText`);}};
  background-color: ${(props) => { return get(props.theme, `colors.${props.variant}.color`);}};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  ${({theme}) => theme.typographyVariants['smallestException'] };
  ${(props) => (props.ghost) ? ButtonGhost : ButtonDefault };
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: .5;
  }
`