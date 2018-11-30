import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer, AboutImageContainer } from '../styled-components/About_Styles';
import { ContentHeader } from '../styled-components/Global_styles';

class About extends Component {

  render() {
    return (
    <>
    <AboutContainer>
        <AboutTitleContainer>
        <ContentHeader title = 'About' color = '#FFF' underline = {true} >
        </ContentHeader>
        </AboutTitleContainer>
       <div style = {{ display:'grid', gridTemplateColumns:'1fr 2fr', height:'100%' }}>
          <div style = {{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%',  width:'100%' }}>
            <div style = {{ display:'flex', width:'300px', height:'400px', backgroundColor:'#FFF', borderRadius:'5px' }}></div>
          </div>
          <div style = {{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', }}>
          <div style = {{ display:'flex', width:'900px', height:'600px', backgroundColor:'#FFF', borderRadius:'5px' }}></div>
          </div>
       </div>
    </AboutContainer>

    </>
    );
  }
}

export default About;
