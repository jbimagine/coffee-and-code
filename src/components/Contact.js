import React, { Component } from 'react';
import { 
    ContactContainer, 
    ContactInfoContainer,
    ContactInfoBody, 
    ContactTitleContainer, 
    ContactFormContainer,  
    } from '../styled-components/Contact_Styles';
    import { ContentHeader } from '../styled-components/Gloabal_styles';


class Contact extends Component {


  render() {
    return (
    <>
    <ContactContainer>
        <ContactInfoContainer>
            <ContactInfoBody>
                <ContentHeader title = 'Address' fontSize = '14px' color= '#666' fontWeight = {500} padding= '0 0 8px 0'/>
                <ContentHeader title = '2020 Judah St. Unit A' fontSize = '18px' padding ='0 0 24px 0' />
                <ContentHeader title = 'Contact' fontSize = '14px' color= '#666' fontWeight = {500} padding= '0 0 8px 0'/>
                <ContentHeader title = 'Joseph D. Bates' fontSize = '18px' padding ='0 0 24px 0' />
                <ContentHeader title = 'Phone' fontSize = '14px' color= '#666' fontWeight = {500} padding= '0 0 8px 0'/>
                <ContentHeader title = '415-770-7058' fontSize = '18px' padding ='0 0 24px 0'/>
                <ContentHeader title = 'Email' fontSize = '14px' color= '#666' fontWeight = {500} padding= '0 0 8px 0'/>
                <ContentHeader title = 'joebates@jbimagine.com' fontSize = '18px' />
            </ContactInfoBody>
        </ContactInfoContainer>
        <ContactFormContainer>
        <ContactTitleContainer>
        <ContentHeader title = 'Get In Touch' underline = {true}>
        </ContentHeader>
        </ContactTitleContainer>
        </ContactFormContainer>
        
    </ContactContainer>

    </>
    );
  }
}

export default Contact;
