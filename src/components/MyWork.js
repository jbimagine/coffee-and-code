import React, { Component } from 'react';
import { MyWorkContainer, MyWorkTitleContainer, MyWorkImageContainer } from '../styled-components/MyWork_Styles';
import { ContentHeader, BorderContainer } from '../styled-components/Global_styles';


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
            key:'babylon', 
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

    let myWorkItems = this.state.myWorkItems.map( ( value, index ) => 
    <MyWorkImageContainer  key = { index } />
)

    return (
    <>
    <MyWorkContainer ref={this.props.myWork_ref}>
        <MyWorkTitleContainer>
            <ContentHeader title ='My Work' underline = {true}/>
        
        </MyWorkTitleContainer>
        <div style = {{overflow:'hidden', display:'flex',  alignItems:'center', height:'100%', position:'relative', maxWidth:'100%', }}>
        <BorderContainer background = { 'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)' } />      
            <div style = {{ display:'flex', justifyContent:'center', overflow:'hidden', gridColumn:'2',  position:'relative', width:'100vw' }} >
        
                { myWorkItems }
                
            </div>
            <BorderContainer background = { 'linear-gradient(to left, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)' } right = { 0 } />      
        </div>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
