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
        <div style = {{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', justifyItems:'center', marginTop:'10vh' }} >
        <div style = {{ backgroundColor:'blue', height: '40vh', width: '20vw', display:'grid',margin:'0 32px', marginTop: '10vh' }}></div>
        <div style = {{ backgroundColor:'orange', height: '40vh', width: '20vw', display:'grid',margin:'0 32px' }}></div>
        <div style = {{ backgroundColor:'red', height: '40vh', width: '20vw', display:'grid',margin:'0 32px', marginTop:'10vh' }}></div>
        <div style = {{ backgroundColor:'green', height: '40vh', width: '20vw', display:'grid',margin:'0 32px' }}></div>
        </div>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
