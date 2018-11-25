import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer } from '../styled-components/About_Styles';
import { ContentHeader } from '../styled-components/Gloabal_styles';


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
        <ContentHeader title = 'About' color = '#FFF' underline = {true} >
        <ColoredLine color="#fff" />
        </ContentHeader>
        </AboutTitleContainer>
    </AboutContainer>

    </>
    );
  }
}

export default About;
