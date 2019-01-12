import React, { Component } from 'react';
import NavigationMenu from 'components/NavigationMenu';
import { NavigationContainer, NavigationTitle } from 'styled-components/Navigation_Styles';

class Navigation extends Component {
  render() {

    const { menuItems, scrollToMyRef, navigationHeight, menuOpen } = this.props;

    return (
     <>
     <NavigationContainer height = { navigationHeight +'px' } ref = { this.props.home_ref } >
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
