import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { 
    ContactContainer, 
    ContactTitleContainer, 
    ContactFormContainer,  
    } from '../styled-components/Contact_Styles';
import { ContentHeader } from '../styled-components/Global_styles';
import  coffeeAndCode8  from '../imgs/coffee_and_code_image_08.jpg';

const sx = {
    background : {
      height:'100vh',
      backgroundImage:`url(${ coffeeAndCode8 })`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'center',
      position:'relative',
      opacity:1,
    }
  }

class Contact extends Component {

    onSubmit = ( fields ) => {
        this.setState({ fields })
        console.log('App comp got: ', fields);
    }

  render() {

    return (
    <>
    <div style = { sx.background }>
    <ContactContainer>
        <ContactFormContainer>
        <ContactTitleContainer ref = { this.props.contact_ref } >
        <ContentHeader title = 'Get In Touch' underline = {true} background = '#FFF' color = '#FFF' ></ContentHeader>
        </ContactTitleContainer>
        <div style = {{ display:'grid', justifyContent:'center' }} >
        <ContentHeader title = 'Want to know more?  Drop me a line!' color = '#FFF' fontSize = '16px' padding = '48px 0' textAlign = 'center' />
        </div>

        <ContactForm
        onSubmit = { fields =>  this.onSubmit(fields) }
        />

        </ContactFormContainer>
        
    </ContactContainer>
    </div>

    </>
    );
  }
}

export default Contact;
