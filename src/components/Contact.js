import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { 
    ContactContainer, 
    ContactInfoContainer,
    ContactInfoBody, 
    ContactTitleContainer, 
    ContactFormContainer,  
    } from '../styled-components/Contact_Styles';
    import { ContentHeader } from '../styled-components/Global_styles';


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
        ],
        fields: {},
    
    } 

    onSubmit = ( fields ) => {
        this.setState({ fields })
        console.log('App comp got: ', fields);
    }

  render() {

    const listOfContactItems =  this.state.contactItems.map(( item, index ) => 
        
        item.key === 'header_main'? 
        <ContentHeader key ={ index } title = { item.label } fontSize = '12px' color= '#666' fontWeight = {500} padding= '0 0 8px 0'/>
        :
        <ContentHeader key = { index } title = { item.label } fontSize = '14px' padding ='0 0 36px 0' />
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
        <ContentHeader title = 'Get In Touch' underline = {true}></ContentHeader>
        </ContactTitleContainer>
        <div style = {{ display:'grid', justifyContent:'center' }} >
        <ContentHeader title = 'Want to know more?  Drop me a line!' fontSize = '16px' padding = '48px 0'/>
        </div>

        <ContactForm
        onSubmit = { fields =>  this.onSubmit(fields) }
        />

        </ContactFormContainer>
        
    </ContactContainer>

    </>
    );
  }
}

export default Contact;
