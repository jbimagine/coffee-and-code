import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import MyWork from 'components/MyWork';
import About from 'components/About';
import Contact from 'components/Contact';
import coffeeAndCodeSVG from 'imgs/coffee_and_code_image_04.jpg';
import { sizes } from 'styled-components/Global_styles';
import Footer from 'components/Footer';

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

const navigationHeight = 100;
const footerHeight = 60;

const circleUniCode = String.fromCharCode(9675);

class Main extends Component {

  state = {
    
    menuItems: [
      { 
        label: 'Home',
        ref_name: this.home_ref = React.createRef(),
       },
      { 
        label: 'My Work',
        ref_name: this.myWork_ref = React.createRef(),
      },
      { 
        label: 'About',
        ref_name: this.about_ref = React.createRef(),
      },
      { 
        label: 'Contact',
        ref_name: this.contact_ref = React.createRef(),
      },
    ],
    menuOpen: false,
    width: window.innerWidth,
    height: window.innerHeight,
  }

  componentDidMount() {
    window.addEventListener('load', this.handleResize);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener('load', this.handleResize);
    window.removeEventListener('resize', this.handleResize );
  }

  componentDidUpdate() {

  }

  // Here we need to get the current window size 
  handleResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.state.width > sizes.tablet ? this.setState({ menuOpen:true }) : this.setState({ menuOpen:false });
  }

  // Funtion handles the opening and closing of the responsive menu
  handleMenuVisibility = () => {
    this.setState({ menuOpen:!this.state.menuOpen });
  }

//  Function to scroll to the start of the component in the DOM
scrollToMyRef = (refName) => {
  window.scrollTo({
      top:this.state.menuItems.ref_name === this.home_ref ? refName.current.offsetTop:refName.current.offsetTop - navigationHeight, 
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
    title = { `COFFEE ${ circleUniCode } & ${ circleUniCode } CODE` }
    menuItems = { this.state.menuItems }
    navigationHeight = { navigationHeight }
    home_ref = { this.home_ref }
    handleMenuVisibility = { this.handleMenuVisibility }
    menuOpen = { this.state.menuOpen }
    />

    <MyWork
      myWork_ref = { this.myWork_ref }
      /> 

    <About
      about_ref = { this.about_ref }     
     />
     
    <Contact
      contact_ref = { this.contact_ref }
      /> 
    
    <Footer 
      footerHeight = { footerHeight }
      contentMain = {  <div>&copy; 2019 Jbimagine Studios</div> }
      contentSub = { 'Joseph D. Bates' }
     />
    </div>
     </>
    );
  }
}

export default Main;
