
import styled from 'styled-components';
import { css } from 'styled-components';

// Set the queries for the different media sizes
const sizes = {
    desktop: 1440,
    tablet: 768,
    phone: 650,
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})

export const NavigationContainer = styled.div `
    display:grid;
    /* grid-template-columns:repeat(12,1fr); */
    /* grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); */
    grid-template-columns: repeat(2, 1fr);
    align-items:center;
    color:white;
    width:100vw;
    background: #000;
    height:60px;
`;

export const NavigationTitle = styled.div `
    display:grid;
    letter-spacing:8px;
    grid-column: 1/1;
    align-items:center;
    height:60px;
    max-height:60px;
    padding: 0 0 0 16px;
    justify-items: start;
`;

export const NavigationMenuContainer = styled.div `
    display:grid;
    grid-column: 2/2;
    max-height:100%;
    align-items:center;
    grid-template-columns:repeat(4, auto);

    ${ media.phone`display:none;` }
`;

export const NavigationMenuItems = styled.div `
    display:grid;
    font-size:12px;
    margin: 0 8px;
    cursor:pointer;
`;

export const NavigationMenuIconContainer = styled.div `
    display:none;

    ${ media.phone`
        display:grid;
        justify-content:end;
        margin-right:16px;` 
    }
`;

export const NavigationMenuIcon = styled.img `
    width:24px;
    display:grid;
    cursor:pointer;
`;