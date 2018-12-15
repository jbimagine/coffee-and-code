import React, { Component } from 'react';
import { MyWorkContainer, MyWorkTitleContainer, } from '../styled-components/MyWork_Styles';
import { ContentHeader } from '../styled-components/Global_styles';


class MyWork extends Component {

  state = {
    
    myWorkItems: [
        { 
            label: 'Neighborhood Map',
            url:'temp',
            img: '',
            key:'map', 
        },
        { 
            label: 'Babylon Demo',
            url:'temp',
            img: '',
            key:'map', 
        },
        { 
            label: 'Memory Magic',
            url:'temp',
            img: '',
            key:'magic', 
        },
        { 
            label: 'Arcade Game',
            url:'temp',
            img: '',
            key:'arcade', 
        },
    ],

  }

  render() {
    return (
    <>
    <MyWorkContainer ref={this.props.myWork_ref}>
        <MyWorkTitleContainer>
            <ContentHeader title ='My Work' underline = {true}/>
        
        </MyWorkTitleContainer>
        <div style = {{overflow:'hidden' }}>
      
            <div style = {{ display:'flex', justifyContent:'center', marginTop:'100px', overflow:'auto' }} >
                {
                this.state.myWorkItems.map( ( value, index ) => 
                        <div style = {{ backgroundColor:'rgb(94,158,202)', height: '350px', width: '300px', display:'grid',margin:'0 32px', borderRadius:'10px', }}></div>
                )
                }
            </div>
        </div>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
