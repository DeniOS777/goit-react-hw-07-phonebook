import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import {
  selectorContacts,
  selectorError,
  selectorIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={3} m="0 auto" maxWidth="382px">
      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm />

      <Box as="h2" mb={3}>
        Contacts
      </Box>

      <Filter />
      {isLoading && <div>Loading contacts...</div>}
      {error && <div>{error}</div>}
      {contacts.length > 0 && !error && <ContactList />}
    </Box>
  );
};

export default App;
