import { css } from '@emotion/react'

export const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  button:focus {
    box-shadow: none !important;
  }
`
