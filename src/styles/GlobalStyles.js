import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
        box-sizing: border-box;
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--color-background);
        font-family: 'Montserrat', sans-serif;
        color: var(--color-primary);
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
        color: inherit;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    button {
        font-family: 'Montserrat', sans-serif;
    }
`;