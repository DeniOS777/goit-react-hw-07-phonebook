import { useSelector, useDispatch } from 'react-redux';
import { resetFilter } from 'redux/filter/filterSlice';
import {
  selectorFilteredContacts,
  selectorFilterValue,
} from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectorFilterValue);
  const filteredContacts = useSelector(selectorFilteredContacts);

  const clearFilter = () => {
    const emptyFilteredContacts =
      filteredContacts.length - 1 === 0 && filterValue !== '';

    if (emptyFilteredContacts) {
      dispatch(resetFilter());
    }
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          onDeleteContact={() => {
            dispatch(deleteContact(id));
            clearFilter();
          }}
        />
      ))}
    </ContactsList>
  );
};

export default ContactList;