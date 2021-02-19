import { createGlobalStyle } from 'styled-components';

/**
 * Style global Toggle page
 * @type {GlobalStyleComponent<{readonly theme?: *}, DefaultTheme>}
 */
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  a:hover {
    color: ${({ theme }) => theme.text};
  }
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
  `;
