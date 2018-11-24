import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import coffeeAndCodeSVG from './imgs/coffee_and_code_image_01.png';

const sx = {
  background : {
    width: '100vw',
    height:'100vh',
    backgroundImage:`url(${ coffeeAndCodeSVG })`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    opacity: 0.15,
    zIndex: 0,
  }
}

class App extends Component {
  render() {
    return (
      <>
      <div className="App" style = {sx.background} >
     
     </div>
     <Main/>

      </>
    );
  }
}

export default App;
