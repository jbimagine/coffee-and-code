
import React from 'react';


export const ContentHeader = ({ color, title, fontSize, underline, fontWeight, textTransform, padding, letterSpacing }) => (
    <div
       style={{
           color: color,
           textTransform:textTransform?textTransform:'uppercase',
           fontSize:fontSize?fontSize:'36px',
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