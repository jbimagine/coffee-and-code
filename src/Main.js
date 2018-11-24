import React, { Component } from 'react';
import Navigation from './components/Navigation'

class Main extends Component {

  state = {
    
    menuItems: [
      { label: 'Home' },
      { label: 'My Work' },
      { label: 'About' },
      { label: 'Contact' },
    ],

  }



  render() {
    return (
     <>
    <Navigation
    title = { 'COFFEE AND CODE' }
    menuItems = { this.state.menuItems }
    />
     </>
    );
  }
}

export default Main;
