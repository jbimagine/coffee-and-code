import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer } from '../styled-components/About_Styles';
import { ContentHeader } from '../styled-components/Global_styles';

class About extends Component {

  render() {
    return (
    <>
    <AboutContainer ref = { this.props.about_ref }>
        <AboutTitleContainer>
        <ContentHeader title = 'About' color = '#FFF' underline = {true} hrBorderColor = 'white' >
        </ContentHeader>
        </AboutTitleContainer>
       <div style = {{ display:'grid', gridTemplateColumns:'1fr', height:'100%', position:'absolute', width:'100%', alignContent:'center' }}>
          <div style = {{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%',  width:'100%' }}>
            <div style = {{ display:'flex', width:'250px', height:'250px', backgroundColor:'#FFF', borderRadius:'50%' }}></div>
          </div>
       <div style = {{ justifyContent:'center', display:'flex', margin:'32px 0' }}>Hi, I'm Joe Bates.  Pleased to meet you!</div>
       <div style = {{ width:'100%', display:'flex', justifyContent:'center' }}>
          <div style = {{ width:'75%', textAlign:'justify', textAlignLast:'center' }} >
          I am a Front End Software Engineer with specialities in HTML, CSS, Javascript, React, and Babylon.  
          I currently live and work in San Francisco, CA where I am a Software Engineer for one of the leading 
          Interior Designing companies, Modsy.  I am also the creator of the Youtube channel Coffee and Code sharing
          my knowledge of coding in Javascript with the masses.   
          </div>

       </div>
       </div>
    </AboutContainer>

    </>
    );
  }
}

export default About;
