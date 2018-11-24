import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
import { NavigationContainer, NavigationTitle } from '../styled-components/Navigation_Styles';

class Navigation extends Component {
  render() {

    const { menuItems } = this.props;

    return (
     <>
     <NavigationContainer>
         <NavigationTitle>
         { this.props.title }
         </NavigationTitle>
         <NavigationMenu
         menuItems = { menuItems }
         />
     </NavigationContainer>
     </>
    );
  }
}

export default Navigation;
