
import styled from 'styled-components';
import { media } from 'styled-components/Global_styles';

export const AboutContainer = styled.div `
display:grid;
    color:#FFF;
    background-color:rgb(94, 158, 202);
    grid-template-rows:80px;
    position:relative;
    height: calc(100vh - 100px);

    ${ media.tablet`
    height:auto;
    `
    }
`;

export const AboutTitleContainer = styled.div `
    display:grid;
    justify-content:center;
    padding-top: 24px;
`;

export const AboutTitle = styled.div `
    font-size: 36px;
`;

export const AboutInfoContainer = styled.div `

`;

export const AboutImageContainer = styled.div `

`;

export const AboutImage = styled.div `
    display:flex; 
    width:300px; 
    height:300px; 
    background-color:#FFF; 
    border-radius:50%;

    ${ media.tablet`
    width:250px; 
    height:250px;
    `
    }

`;