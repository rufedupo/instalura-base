import { css } from 'styled-components'
import theme from '../index'

export const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointsNames = Object.keys(cssByBreakpoints)
  return breakpointsNames.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${theme.breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `
  })
}