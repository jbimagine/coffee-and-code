import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer, AboutImageContainer } from '../styled-components/About_Styles';
import { ContentHeader } from '../styled-components/Global_styles';

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
        </ContentHeader>
        </AboutTitleContainer>
        <AboutImageContainer>
          
        </AboutImageContainer>
    </AboutContainer>

    </>
    );
  }
}

export default About;
