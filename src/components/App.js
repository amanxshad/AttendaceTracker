import React, {useState , useEffect, useRef} from 'react';
import './App.css';
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactLIst';


function App() {
  
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const isInitialMount = useRef(true);
  const hasMounted = useRef(false);


// handler to add contacts from list
  const addContactHandler = (contact, index) => {
    console.log(contact);
    setContacts([...contacts, {id: index, ...contact}]);
  };


// handler to remove contacts from list
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };


  // Retrieve data from local storage when the component mounts
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      console.log('Retrieving from local storage...');
      const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retrievedContacts) {
        console.log('Retrieved contacts:', retrievedContacts);
        setContacts(retrievedContacts);  // Update the contacts state
      } else {
        console.log('No contacts found in local storage.');
      }
    }
  }, []);


  // Save data to local storage whenever 'contacts' changes
  useEffect(() => {
    if (hasMounted.current) {
      console.log('Saving to local storage:', contacts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } else {
      hasMounted.current = true;
    }
  }, [contacts]);


  return (
    <div className='ui container'> 
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
  