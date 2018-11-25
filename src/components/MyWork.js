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
        <ColoredLine color="black" />
        </MyWorkTitle>
        </MyWorkTitleContainer>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
