import React, { Component } from 'react';
import { MyWorkContainer } from '../styled-components/MyWork_Styles';

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

    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
