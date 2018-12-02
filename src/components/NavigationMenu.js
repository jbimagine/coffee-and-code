import React, { Component } from 'react';
import { NavigationMenuItems, NavigationMenuContainer, NavigationMenuIconContainer, NavigationMenuIcon } from '../styled-components/Navigation_Styles';
import menuIconSVG from '../imgs/menu_icon.svg';

class NavigationMenu extends Component {
  render() {

    const { menuItems } = this.props;

    return (
     <>
        
         <NavigationMenuContainer>
         {
           menuItems.map( (value, index) => 
             
              <NavigationMenuItems key = { index } onClick = { () => { this.props.scrollToMyRef(value.ref_name); } } > { value.label } </NavigationMenuItems> 
              
             )
         }
        </NavigationMenuContainer>
        
        <NavigationMenuIconContainer>
            <NavigationMenuIcon  src = { menuIconSVG }/>
        </NavigationMenuIconContainer>
     </>
    );
  }
}

export default NavigationMenu;
