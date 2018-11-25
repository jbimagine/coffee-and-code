import React, { Component } from 'react';
import { MyWorkContainer, MyWorkTitleContainer, } from '../styled-components/MyWork_Styles';
import { ContentHeader } from '../styled-components/Gloabal_styles';


class MyWork extends Component {

  state = {
    
    menuItems: [
      { label: 'Home' },
      { label: 'My Work' },
      { label: 'About' },
      { label: 'Contact' },
    ],

  }

  render() {
    return (
    <>
    <MyWorkContainer>
        <MyWorkTitleContainer>
            <ContentHeader title ='My Work' underline = {true}/>
        
        </MyWorkTitleContainer>
        <div style = {{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', justifyItems:'center', marginTop:'10vh' }} >
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '40vh', width: '15vw', display:'grid',margin:'0 32px', borderRadius:'10px', marginTop: '10vh' }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '40vh', width: '15vw', display:'grid',margin:'0 32px', borderRadius:'10px', }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '40vh', width: '15vw', display:'grid',margin:'0 32px', borderRadius:'10px', marginTop:'10vh' }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '40vh', width: '15vw', display:'grid',margin:'0 32px', borderRadius:'10px', }}></div>
        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '40vh', width: '15vw', display:'grid',margin:'0 32px', borderRadius:'10px', marginTop:'10vh' }}></div>
        </div>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
