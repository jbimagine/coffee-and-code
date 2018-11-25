import React, { Component } from 'react';
import { ContactContainer, ContactTitleContainer, ContactTitle } from '../styled-components/Contact_Styles';

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
        <ContactTitleContainer>
        <ContactTitle>
            <div>Contact</div>
        <ColoredLine color="black" />
        </ContactTitle>
        </ContactTitleContainer>
    </ContactContainer>

    </>
    );
  }
}

export default Contact;
