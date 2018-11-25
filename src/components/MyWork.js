import React, { Component } from 'react';
import { MyWorkContainer, MyWorkTitleContainer, MyWorkTitle } from '../styled-components/MyWork_Styles';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
);
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
        <MyWorkTitle>
            <div>My Work</div>
        <ColoredLine color="#666" />
        </MyWorkTitle>
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
