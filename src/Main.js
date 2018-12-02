import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MyWork from './components/MyWork';
import About from './components/About';
import Contact from './components/Contact';
import coffeeAndCodeSVG from './imgs/coffee_and_code_image_04.jpg';

const sx = {
  background : {
    height:'100vh',
    backgroundImage:`url(${ coffeeAndCodeSVG })`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    position:'relative',
    opacity:1,
  }
}

const navigationHeight = 100

const circleUniCode = String.fromCharCode(9675);

class Main extends Component {

  state = {
    
    menuItems: [
      { label: 'Home' },
      { label: 'My Work' },
      { label: 'About' },
      { label: 'Contact' },
    ],

  }

  constructor(props) {
    super(props)
    this.myRef = React.createRef();
}

scrollToMyRef = () => {
  window.scrollTo({
      top:this.myRef.current.offsetTop - navigationHeight, 
      behavior: "smooth"
  })
}

  render() {
    return (
     <>
    <div style = {sx.background} >
    </div>
    {/* <div style = {{ position:'absolute', zIndex: 1, color:'white', textTransform:'uppercase', fontSize: '36px', top: '50%', marginRight:'48px', right:0 }}>Coffee + Code = Awesomeness</div>  */}
     
    <div>
    <Navigation
    scrollToMyRef = { this.scrollToMyRef }
    title = { `COFFEE ${ circleUniCode } AND ${ circleUniCode } CODE` }
    menuItems = { this.state.menuItems }
    navigationHeight = { navigationHeight }
    />
  
      <MyWork
      myWork_ref={this.myRef}
      /> 
     <About/>
     <Contact/>
    </div>
     </>
    );
  }
}

export default Main;
