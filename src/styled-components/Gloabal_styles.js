
import React from 'react';
import { css } from 'styled-components';

// Set the queries for the different media sizes
export const sizes = {
    desktop: 1440,
    tablet: 768,
    phone: 650,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})


export const ContentHeader = ({ color, title, fontSize, underline, fontWeight, textTransform, padding, letterSpacing }) => (
    <div
       style={{
           color: color,
           textTransform:textTransform?textTransform:'uppercase',
           fontSize:fontSize?fontSize:'28px',
           fontWeight:fontWeight,
           padding: padding?padding:null,
           letterSpacing: letterSpacing?letterSpacing:'8px',
       }}
   >{ title }
   {
       underline?<hr />:null
   }
   </div> 
   
 );


export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
);