import React from 'react';
import ContactCard from './contactCard'

const ContactList = (props) => {


    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }


    const renderContactList = props.contacts.map((contact, index) => {
        return(
            <ContactCard contact={contact} key={index} clickHandler= {deleteContactHandler}></ContactCard>
        );
    })


    return(
        <div className='ui celled list'>{renderContactList}</div>
    );
}

export default ContactList; 