
import styled from 'styled-components';

export const ContactContainer = styled.div `
    display:grid;
    color:#FFF;
    background-color:rgb(94, 158, 202);    

    @media (min-width: 1001px) {
        grid-template-columns:repeat(2,1fr);
        height:calc(100vh - 100px);
    }
    
    @media (max-width: 1000px) {
        grid-template-rows:repeat(2,1fr);
        height:100vh;
    }
`;

export const ContactInfoContainer = styled.div `
    background:#f3f3f3;
    color: #222;

    @media (min-width: 1001px) {
        height:auto;
    }

    @media (max-width: 1000px) {
        padding-top:24px;
        height:calc(50vh - 50px);        
    }
    
`;

export const ContactInfoBody = styled.div `
    display:grid;
    justify-content:center;
    align-content:center;
    height:100%;
`;
export const ContactFormContainer = styled.div `
    padding:0 36px;
    background: rgb(94,158,202);


    @media (min-width: 1001px) {
        height:auto;
    }
    
    @media (max-width: 1000px) {
        height:100%;
        padding-bottom:16px;
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

export const ContactInputItemsContainer = styled.div `
    grid-template-columns:repeat(2, 1fr);
    margin-bottom:24px;

    @media (min-width: 1001px) {
        display:grid;
    }
    
    @media (max-width: 1000px) {
        display:block;
    }
`;


export const ContactInputItems = styled.input `
    background:transparent;
    border:0;
    border-bottom: 1px solid #FFF;
    color:#FFF;
    width:200px;
    margin:24px 0;
    justify-self: ${ props => props.contactInputItems_justifySelf?props.contactInputItems_justifySelf:'start' };

    &::placeholder {
        color:#FFF;
    }
`;

export const ContactTextArea = styled.textarea `
    border-radius:5px;
    padding:10px;
    height:350px;
    margin: 0 0 24px 0;
`;
