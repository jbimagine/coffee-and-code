import React, { Component } from 'react';
import { 
    ContactContainer, 
    ContactInfoContainer,
    ContactInfoBody, 
    ContactTitleContainer, 
    ContactFormContainer, 
    ContactTitle, 
    } from '../styled-components/Contact_Styles';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
);
class Contact extends Component {


  render() {
    return (
    <>
    <ContactContainer>
        <ContactInfoContainer>
            <ContactInfoBody>
                <div>Address</div>
                <div> 2020 Judah St.</div>
                <div>Contact</div>
                <div>Joseph D. Bates</div>
                <div>Phone</div>
                <div>415-770-7058</div>
                <div>Email</div>
                <div>joebates@coffeeandcode.me</div>
            </ContactInfoBody>
        </ContactInfoContainer>
        <ContactFormContainer>
        <ContactTitleContainer>
        <ContactTitle>
            <div>Get In Touch</div>
        <ColoredLine color="#FFF" />
        </ContactTitle>
        </ContactTitleContainer>
        </ContactFormContainer>
        
    </ContactContainer>

    </>
    );
  }
}

export default Contact;
