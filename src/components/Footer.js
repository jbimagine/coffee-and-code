import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
    <>
    <div style = {{ width:'auto', height:this.props.footerHeight + 'px', background:'#335075', color:'#FFF', display:'flex', alignItems:'center', padding:'0 16px', justifyContent:'space-between' }} > 
    <div>{ this.props.contentMain }</div>
    <div>{ this.props.contentSub }</div>
    </div>
    </>
    );
  }
}

export default Footer;
