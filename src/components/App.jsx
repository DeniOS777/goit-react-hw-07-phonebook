import { useEffect, useRef } from 'react';
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
import { Loader } from './Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Container } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  const isFirstLoading = useRef(true);

  useEffect(() => {
    dispatch(fetchContacts()).then(res => {
      if (res.meta.requestStatus === 'fulfilled')
        isFirstLoading.current = false;
    });
  }, [dispatch]);

  const hasContacts = contacts.length > 0 && !error;

  return (
    <Container>
      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm />

      <Box as="h2" mb={3}>
        Contacts
      </Box>

      <Filter />

      {isLoading && isFirstLoading.current && <Loader height="10" />}
      {error && <ErrorMessage />}
      {hasContacts && <ContactList />}
    </Container>
  );
};

export default App;
