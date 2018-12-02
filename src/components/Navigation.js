import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
import { NavigationContainer, NavigationTitle } from '../styled-components/Navigation_Styles';

class Navigation extends Component {
  render() {

    const { menuItems, scrollToMyRef, navigationHeight } = this.props;

    return (
     <>
     <NavigationContainer height = { navigationHeight +'px' } ref = { this.props.home_ref } >
         <NavigationTitle>
         { this.props.title }
         </NavigationTitle>
         <NavigationMenu
         menuItems = { menuItems }
         scrollToMyRef = {  scrollToMyRef }
         />
     </NavigationContainer>
     </>
    );
  }
}

export default Navigation;
