import React, { Component } from 'react';
import { MyWorkContainer, MyWorkTitleContainer, } from '../styled-components/MyWork_Styles';
import { ContentHeader } from '../styled-components/Gloabal_styles';


class MyWork extends Component {

  state = {
    
    myWorkItems: [
        { 
            label: 'Neighborhood Map',
            url:'temp',
            img: '',
            key:'map', 
        },
        { 
            label: 'Babylon Demo',
            url:'temp',
            img: '',
            key:'map', 
        },
        { 
            label: 'Memory Magic',
            url:'temp',
            img: '',
            key:'magic', 
        },
        { 
            label: 'Arcade Game',
            url:'temp',
            img: '',
            key:'arcade', 
        },
    ],

  }

  render() {
    return (
    <>
    <MyWorkContainer>
        <MyWorkTitleContainer>
            <ContentHeader title ='My Work' underline = {true}/>
        
        </MyWorkTitleContainer>
        <div style = {{overflow:'hidden' }}>
        <div style = {{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', justifyItems:'center', marginTop:'100px', overflow:'auto' }} >
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '275px', width: '200px', display:'grid',margin:'0 32px', borderRadius:'10px',  }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '275px', width: '200px', display:'grid',margin:'0 32px', borderRadius:'10px', }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '275px', width: '200px', display:'grid',margin:'0 32px', borderRadius:'10px',  }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '275px', width: '200px', display:'grid',margin:'0 32px', borderRadius:'10px', }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '275px', width: '200px', display:'grid',margin:'0 32px', borderRadius:'10px',  }}></div>
        </div>
        </div>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
