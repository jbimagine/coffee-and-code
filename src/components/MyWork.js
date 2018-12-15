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
        <div style = {{overflow:'hidden', display:'flex',  alignItems:'center', height:'100%', position:'absolute', maxWidth:'100%' }}>
        <div style = {{ zIndex:'3', height:'100%', position:'absolute', width:'100px', background:'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)' }} ></div>      
            <div style = {{ display:'flex', justifyContent:'center', overflow:'hidden', gridColumn:'2',  position:'relative', width:'100vw' }} >
                {
                this.state.myWorkItems.map( ( value, index ) => 
                        <div  key = { index } style = {{ backgroundColor:'rgb(94,158,202)', height: '350px', width: '300px', display:'grid',margin:'0 32px', borderRadius:'10px', flexShrink:'0' }}></div>
                )
                }
            </div>
            <div style = {{ background:'linear-gradient(to left, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)', zIndex:'3', height:'100%', position:'absolute', width:'100px', right:'0' }} ></div>      
        </div>
    </MyWorkContainer>

    </>
    );
  }
}

export default MyWork;
