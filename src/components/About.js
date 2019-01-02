import React, { Component } from 'react';
import { AboutContainer, AboutTitleContainer, AboutImageContainer } from '../styled-components/About_Styles';
import { ContentHeader } from '../styled-components/Global_styles';

class About extends Component {

  render() {
    return (
    <>
    <AboutContainer ref = { this.props.about_ref }>
        <AboutTitleContainer>
        <ContentHeader title = 'About' color = '#FFF' underline = {true} >
        </ContentHeader>
        </AboutTitleContainer>
       <div style = {{ display:'grid', gridTemplateColumns:'1fr', alignContent:'start', height:'100%', position:'absolute', alignContent:'center' }}>
          <div style = {{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%',  width:'100%' }}>
            <div style = {{ display:'flex', width:'250px', height:'250px', backgroundColor:'#FFF', borderRadius:'50%' }}></div>
          </div>
       <div style = {{ justifyContent:'center', display:'flex', margin:'32px 0' }}>Hi, I'm Joe Bates.  Pleased to meet you!</div>
       <div style = {{ width:'100%', display:'flex', justifyContent:'center' }}>
          <div style = {{ width:'75%', textAlign:'justify', textAlignLast:'center' }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum hendrerit eros, eget egestas turpis finibus vel. 
          Sed rhoncus, justo et faucibus dictum, nunc purus gravida quam, at varius nulla nisl quis odio. Curabitur eu felis efficitur, 
          hendrerit lacus sit amet, efficitur lectus. Donec euismod vel nisi laoreet pretium. Quisque felis lacus, mollis nec ex eget, 
          facilisis vehicula tortor. Aenean semper nibh id porttitor suscipit. Integer aliquam in orci id pharetra. Sed et rutrum dolor. 
          Curabitur accumsan ac diam et imperdiet. Aenean a pellentesque metus. Etiam ac arcu ac augue fringilla sagittis sed quis risus. 
          Aenean a vulputate eros. Etiam vitae interdum sapien.
          </div>

       </div>
       </div>
    </AboutContainer>

    </>
    );
  }
}

export default About;
