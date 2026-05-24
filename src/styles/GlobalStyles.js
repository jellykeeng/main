import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bgDark};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  p { line-height: 1.7; }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
    &:hover { opacity: 0.8; }
  }

  ul, ol { list-style: none; }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    font-size: inherit;
  }

  input, textarea, select {
    font-family: ${({ theme }) => theme.fonts.body};
    outline: none;
    border: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bgDark};
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bgDark}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDark};
    border-radius: 3px;
  }
`;

export default GlobalStyles;