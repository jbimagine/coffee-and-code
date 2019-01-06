import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer, AboutImage, AboutImageContainer } from '../styled-components/About_Styles';
import { ContentHeader } from '../styled-components/Global_styles';

class About extends Component {

  render() {
    return (
    <>
    <AboutContainer ref = { this.props.about_ref }>
        <AboutTitleContainer>
        <ContentHeader title = 'About' color = '#FFF' underline = {true} background = 'white' >
        </ContentHeader>
        </AboutTitleContainer>
       <div style = {{ display:'flex', flexDirection:'column', height:'100%', position:'relative', justifyContent:'center', width:'100%', backgroundColor:'rgb(94,158,202)', padding:'24px 0' }}>
          <div style = {{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
            <AboutImage></AboutImage>
          </div>
       
       <div style = {{ width:'100%', display:'flex', justifyContent:'center',}}>
       <div style = {{ width:'75%', textAlign:'justify', textAlignLast:'center' }}>
       <div style = {{ justifyContent:'center', display:'flex', margin:'32px 0' }}>Hi, I'm Joe Bates.  Pleased to meet you!</div>
          <div>
          I am a Front End Software Engineer with specialities in HTML, CSS, Javascript, React, and Babylon.  
          I currently live and work in San Francisco, CA where I am a Software Engineer for one of the leading 
          Interior Designing companies, Modsy.  I am also the creator of the Youtube channel Coffee & Code sharing
          my knowledge of coding in Javascript with the masses.   
          </div>
       </div>
       </div>
       </div>
    </AboutContainer>

    </>
    );
  }
}

export default About;
