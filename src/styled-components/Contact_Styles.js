
import styled from 'styled-components';

export const ContactContainer = styled.div `
    display:grid;
    grid-template-columns:repeat(2,1fr);
    height:calc(100vh - 100px);
    color:#FFF;
    background-color:rgb(94, 158, 202);    
`;

export const ContactInfoContainer = styled.div `
    background:#f3f3f3;
    color: #222;
    grid-column:1/2;
`;

export const ContactInfoBody = styled.div `
    display:grid;
    justify-content:center;
    align-content:center;
    height:100%;
`;
export const ContactFormContainer = styled.div `
    grid-column:2/2;

`;

export const ContactTitleContainer = styled.div `
    display:grid;
    justify-content:center;
    padding-top: 24px;

`;

export const ContactTitle = styled.div `
    font-size: 36px;
`;