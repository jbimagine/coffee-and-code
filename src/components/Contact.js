import React, { Component } from 'react';
import { ContactContainer, ContactInfoContainer, ContactTitleContainer, ContactTitle } from '../styled-components/Contact_Styles';

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

        </ContactInfoContainer>
        <ContactTitleContainer>
        <ContactTitle>
            <div>Contact</div>
        <ColoredLine color="#FFF" />
        </ContactTitle>
        </ContactTitleContainer>
    </ContactContainer>

    </>
    );
  }
}

export default Contact;
