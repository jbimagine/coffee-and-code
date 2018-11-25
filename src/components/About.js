import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer, AboutTitle } from '../styled-components/About_Styles';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
);
class About extends Component {

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
    <AboutContainer>
        <AboutTitleContainer>
        <AboutTitle>
            <div>About</div>
        <ColoredLine color="#fff" />
        </AboutTitle>
        </AboutTitleContainer>
    </AboutContainer>

    </>
    );
  }
}

export default About;
