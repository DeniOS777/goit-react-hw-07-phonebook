import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm />
      <Box as="h2" mb={3}>
        Contacts
      </Box>
      <Filter />

      {contacts.length > 0 && <ContactList />}
    </Box>
  );
};

export default App;
