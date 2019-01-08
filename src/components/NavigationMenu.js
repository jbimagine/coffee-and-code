import React, { Component } from 'react';
import { NavigationMenuItems, NavigationMenuContainer, NavigationMenuIconContainer, NavigationMenuIcon, NavigationMenuItemsContainer } from '../styled-components/Navigation_Styles';
import menuIconSVG from '../imgs/menu_icon.svg';

class NavigationMenu extends Component {
  render() {

    const { menuItems, menuOpen } = this.props;

    return (
     <>
        
         {
           menuOpen && <NavigationMenuContainer>
         {
           menuItems.map( (value, index) => 
             
              <NavigationMenuItemsContainer key = { index } onClick = { () => { this.props.scrollToMyRef(value.ref_name); } } >
                <NavigationMenuItems>{ value.label }</NavigationMenuItems>
               </NavigationMenuItemsContainer> 
                
             )
         }
        </NavigationMenuContainer>
         }
        
        <NavigationMenuIconContainer>
            <NavigationMenuIcon onClick = { this.props.handleMenuVisibility } src = { menuIconSVG }/>
        </NavigationMenuIconContainer>
     </>
    );
  }
}

export default NavigationMenu;
