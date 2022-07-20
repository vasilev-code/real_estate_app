import {css} from 'styled-components'
import {colorBase} from './Theme'

export const CommonCSS = css`
    @font-face {
        font-family: 'Roboto-Regular';
        src: url('/fonts/Roboto-Regular.ttf');
        font-weight: 400;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${colorBase.backgroundColor};
        color: ${colorBase.fontColor};
        font-family: Roboto-Regular;
    }

    a {
        text-decoration: none;
        color: ${colorBase.fontColor};
    }

    h2 {
        margin-top: 30px;
    }

    button {
        border-radius: 10px;
        height: 30px;
        border: 0;
        font-family: Roboto-Regular;
    }
    button:hover {
        background-color: #8f8f8f;
        color: ${colorBase.fontColor};
      }
    img {
        border-radius: 10px;
    }
`;
