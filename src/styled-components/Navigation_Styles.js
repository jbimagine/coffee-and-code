
import styled from 'styled-components';
import { media } from './Global_styles';


export const NavigationContainer = styled.div `
    display:grid;
    /* grid-template-columns:repeat(12,1fr); */
    /* grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); */
    box-shadow: 0 0 18px 6px #006ead36;
    grid-template-columns: repeat(2, 1fr);
    align-items:center;
    color:white;
    width:100vw;
    background-color: rgba(94, 158, 202, 0.75);
    height: ${ props => props.height } ;
    position:fixed;
    text-transform:uppercase;
    top:0;
    z-index:5;
`;

export const NavigationTitle = styled.div `
    display:grid;
    letter-spacing:8px;
    grid-column: 1/1;
    align-items:center;
    height:60px;
    max-height:60px;
    margin-left: 32px;
    justify-items: start;
`;

export const NavigationMenuContainer = styled.div `
    display:grid;
    grid-column: 2/2;
    max-height:100%;
    align-items:center;
    grid-template-columns:repeat(4, auto);
    margin-right:32px;

    ${ media.tablet`display:none;` }
`;

export const NavigationMenuItems = styled.div `
    display:grid;
    font-size:12px;
    margin: 0 8px;
    letter-spacing:4px;
    cursor:pointer;
    justify-content:end;
`;

export const NavigationMenuIconContainer = styled.div `
    display:none;

    ${ media.tablet`
        display:grid;
        justify-content:end;
        margin-right:32px;` 
    }
`;

export const NavigationMenuIcon = styled.img `
    width:24px;
    display:grid;
    cursor:pointer;
`;