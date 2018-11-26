
import styled from 'styled-components';

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

export const ContactTitleContainer = styled.div `
    display:grid;
    justify-content:center;
    padding-top: 24px;

`;

export const ContactTitle = styled.div `
    font-size: 36px;
`;