
import styled from 'styled-components';
import { media } from './Global_styles';

export const MyWorkContainer = styled.div `
    height:calc(100vh - 100px);
    background:#fff;
    position:relative;

    ${ media.tablet`
    position:static;
    `
    }
`;

export const MyWorkTitleContainer = styled.div `
    display:grid;
    justify-content:center;
    padding-top: 24px;
    position:absolute;
    width:100%;
`;

export const MyWorkTitle = styled.div `
    font-size: 36px;
    color:#666;
`;

export const MyWorkImageContainer = styled.div `
    background-color:rgb(94, 158, 202);
    height:350px;
    width:300px;
    display:grid;
    margin: 0 32px;
    border-radius:10px;
    flex-shrink:0;
    
    ${ media.phone`
    width:250px; 
    height:250px;
    margin-top:60px;
    `
    }
`;