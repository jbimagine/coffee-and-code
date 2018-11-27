import React, { Component } from 'react';
import { ContactInputItems, ContactTextArea, ContactInputItemsContainer } from '../styled-components/Contact_Styles';
import { FormButtonContainer, FormButton } from '../styled-components/Global_styles';


class ContactForm extends Component {

    state = {
        name: '',
        lastName: '',
        subject: '',
        email:'',
        message:'',
    }

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            subject: '',
            email:'',
            message:'',
        })
    }

  render() {
    return (
    <>
        <form style = {{ display:'grid' }}>
            <ContactInputItemsContainer >
            <ContactInputItems 
            name = 'name'
            placeholder = 'Name' 
            value = { this.state.name } 
            onChange = { this.handleChange } 
            />
            <ContactInputItems 
            justifySelf = { 'end' }
            name = 'email'
            placeholder = 'Email' 
            value = { this.state.email } 
            onChange = { this.handleChange } 
            />
            </ContactInputItemsContainer>
            <ContactInputItems 
            name = 'subject'
            placeholder = 'Subject' 
            value = { this.state.subject } 
            onChange = { this.handleChange } 
            />
            <ContactTextArea 
            name = 'message'
            placeholder = 'Message' 
            value = { this.state.message } 
            onChange = { this.handleChange } 
            />
        </form>

        <FormButtonContainer >
        <FormButton  onClick = { e => this.onSubmit(e) }
            border ={ '1px solid #fff' }
            color = { '#FFF' }
        > Submit </FormButton>
        </FormButtonContainer>
    </>
    );
  }
}

export default ContactForm;
