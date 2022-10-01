import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';
import { resetFilter } from 'redux/filter/filterSlice';
import { useGetFilteredContacts } from 'hooks/useGetFilteredContacts';
import { getFilterValue } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const filteredContacts = useGetFilteredContacts();

  const clearFilter = () => {
    const emptyFilteredContacts =
      filteredContacts.length - 1 === 0 && filterValue !== '';

    if (emptyFilteredContacts) {
      dispatch(resetFilter());
    }
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
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
