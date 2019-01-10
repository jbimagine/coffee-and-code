
import styled from 'styled-components';

export const ContactContainer = styled.div `
    display:grid;
    color:#FFF;
    height:100%;
`;

export const ContactFormContainer = styled.div `
    padding:0 36px;
    background: rgb(94,158,202, 0.90);


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
    margin:24px 0;
    
    ${'' /* Creates a transparent background, replacing the default auto-fill
        that chrome ships with.
     */}
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
        -webkit-transition-delay: 9999s;
  }

    justify-self: ${ props => props.justifySelf?props.justifySelf:'start' };

    &:focus {
        outline:none;
    }

    &::placeholder {
        color:#FFF;
    }

    @media (min-width: 1001px) {
    width:80%;
    }
    
    @media (max-width: 1000px) {
    width:100%;
    }
`;

export const ContactTextArea = styled.textarea `
    border-radius:5px;
    padding:10px;
    height:350px;
    margin: 0 0 24px 0;
    resize:none;
`;
