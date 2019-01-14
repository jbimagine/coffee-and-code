import React, { Component } from 'react';
import NavigationMenu from 'components/NavigationMenu';
import { NavigationContainer, NavigationTitle } from 'styled-components/Navigation_Styles';

class Navigation extends Component {
  render() {

    const { menuItems, scrollToMyRef, navigationHeight, menuOpen } = this.props;

    return (
     <>
     <NavigationContainer height = { navigationHeight +'px' } ref = { this.props.home_ref } >
     <div style = {{ width:'100vw', height:'1px', position:'fixed', top:'100px', display:'flex', justifyContent:'center', zIndex:7 }}>
       <div style ={{ width:'80vw', background:'#DDD', height:'100%', }}></div>
     </div>
         <NavigationTitle>
         { this.props.title }
         </NavigationTitle>
         <NavigationMenu
          menuItems = { menuItems }
          scrollToMyRef = {  scrollToMyRef }
          handleMenuVisibility = { this.props.handleMenuVisibility }
          menuOpen = { menuOpen }
         />
     </NavigationContainer>
     </>
    );
  }
}

export default Navigation;
