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

    state = {
        contactItems:
        [
            {
                label: 'Address',
                key: 'header_main',
            },
            {
                label: '2020 Judah St. Unit A',
                key: 'header_secondary',
            },
            {
                label: 'Contact',
                key: 'header_main',
            },
            {
                label: 'Joseph D. Bates',
                key: 'header_secondary',
            },
            {
                label: 'Phone',
                key: 'header_main',
            },
            {
                label: '1-415-770-7058',
                key: 'header_secondary',
            },
            {
                label: 'Email',
                key: 'header_main',
            },
            {
                label:'joebates@jbimagine.com',
                key: 'header_secondary',
            },
        ]
    
    } 


  render() {

    const listOfContactItems =  this.state.contactItems.map(( item, index ) => 
        
        item.key === 'header_main'? 
        <ContentHeader key ={ index } title = { item.label } fontSize = '12px' color= '#666' fontWeight = {500} padding= '0 0 8px 0'/>
        :
        <ContentHeader key = { index } title = { item.label } fontSize = '14px' padding ='0 0 54px 0' />
        )

    return (
    <>
    <ContactContainer>
        <ContactInfoContainer>
            <ContactInfoBody>
                { listOfContactItems }
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
