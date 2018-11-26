
import styled from 'styled-components';
import coffeeAndCodeSVG02 from '../imgs/coffee_and_code_image_06.jpg';


export const ContactContainer = styled.div `
    display:grid;
    height:calc(100vh - 100px);
    color:#FFF;
    background-color:rgb(94, 158, 202);    

    @media (min-width: 1001px) {
        grid-template-columns:repeat(2,1fr);
    }
    
    @media (max-width: 1000px) {
        grid-template-rows:repeat(2,1fr);
    }
`;

export const ContactInfoContainer = styled.div `
    background:#f3f3f3;
    color: #222;

    @media (max-width: 1000px) {
        padding-top:24px;
    }
`;

export const ContactInfoBody = styled.div `
    display:grid;
    justify-content:center;
    align-content:center;
    height:100%;
`;
export const ContactFormContainer = styled.div `
    
`;
export const ContactFormBackground = styled.div `
    
    position:absolute;
    background-image:url( ${coffeeAndCodeSVG02});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:right;
    opacity:0.1;

    @media (min-width: 1001px) {
        height:calc(100vh - 100px);
        width:50vw;
    }
    
    @media (max-width: 1000px) {
        width:100vw;
        height: calc(50vh - 50px);
    }
`;

export const ContactTitleContainer = styled.div `
    display:grid;
    justify-content:center;
    padding-top: 24px;

`;

export const ContactTitle = styled.div `
    font-size: 36px;
`;